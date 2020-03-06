const path = require('path')
const { override, fixBabelImports, addLessLoader, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');

/* Need to edit your webpack configuration past this extent? 
* https://github.com/arackaf/customize-cra/blob/master/api.md
*/

// Used by sass-resources-loader to inject variables into every scss file.
// Allows you to define colors inside of colors.scss and then use them everywhere without importing them manually.
const SCSS_RESOURCES = ['./src/utils/iota/colors.scss', './src/utils/iota/iota.scss']

module.exports = override(
  // https://stackoverflow.com/questions/54992493/add-webpack-alias-with-react-app-rewired-and-customize-cra
  addWebpackAlias({
    '@': path.resolve(__dirname, './src/')
  }),
  // https://ant.design/docs/react/getting-started#Import-on-Demand
  fixBabelImports('antd', {
    libraryDirectory: "es",
    style: true
  }),
  fixBabelImports('lodash', {
    libraryDirectory: "",
  }),
  // https://ant.design/docs/react/customize-theme (Customize in webpack)
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#B0161D",
      "@warning-color": "#D03940",
      "@disabled-color": "#666666"
    },
  }),
  addWebpackModuleRule({
    test: /\.css$/,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } }
    ]
  }),
  // https://github.com/shakacode/sass-resources-loader
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: SCSS_RESOURCES
        },
      },
    ]
  })
)
