![ADK Logo](./adk.svg)

This is a [React](https://facebook.github.io/react/) starter kit built by [ADK Group](https://adkgroup.com/). It contains many common dependencies, configurations, and scripts to get you up and running quickly.

The ADK React standards used in this repository are documented [here](https://adkgroup.atlassian.net/wiki/spaces/FH/overview) on Confluence.

###### Other useful branches:
- [base_light](https://bitbucket.org/adkgroup/adk-web-kit/src/base_light/) - Similar to the base webkit, base_light is useful for projects that want less things set up already.
- [base_with-localization](https://bitbucket.org/adkgroup/adk-web-kit/src/base_with_localization/) - Should be used with projects anticipating the use of localization.
- [demo](https://bitbucket.org/adkgroup/adk-web-kit/src/demo/) - New features should be PR'd into this branch.

###### Preconfigured dependencies:
- [Docker](https://www.docker.com/) and [Fargate](https://aws.amazon.com/fargate/) deploy scripts
- [Javascript Obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator)
- [React-router](https://reacttraining.com/react-router/)
- [Redux persist](https://github.com/rt2zz/redux-persist)
- [Redux optimist](https://github.com/ForbesLindesay/redux-optimist)

Other useful configurations
- Built-in cache-busting for new builds
- Full login authentication flow including:
  - Forgot password + deep linking support
  - Token refresh management + jwt management
  - Remember me state persistance
  - Full logout including local storage cleaning and redux reset
- Proxy setup example
- Healthcheck file at server root included
- Redux devtools integration including network request debugging
- Full SCSS reset
- ADK standards eslint and prettier config
- Path aliases (`screens/home`, `features/login`, `bootstrap/redux`, etc)
- Drag-and-drop custom fonts

**Note**: This repository can and should be modified! If you run into any issues or would like to propose changes, please submit a PR. Thanks!

### Table of Contents

- [Architecture overview](#architecture-overview)
- [Getting started](#getting-started)
  - [Environment](#environment)
  - [Run the App](#run-the-app)
- [Changing metadata](#changing-metadata)
- [Additional Libraries](#Additional-libraries)

### Getting started
#### Environment
- Download [Node](https://nodejs.org/en/) and [node package manager](https://www.npmjs.com/) (npm). **ADK Group uses npm, not yarn.**
- Node v12.15.0

#### Run the App
- Fork the repository at the base branch _(ensure you have uploaded an SSH key to the ADK bitbucket account)_
`$ git clone git@bitbucket.org:adkgroup/adk-web-kit.git`
- Install node dependencies
`npm i`
- Remove `.sample` from `.env.development.sample`
- Start development server 
`npm start`


#### Architecture overview
###### Structure
- The folder structure is organized by _features_. _Screens_ import _features_. The screens folder is organized by authenticated status. Each top level folder (for example, screen/authenticated and screens/authenticated/Home) contains a navigator. This matches the agreed-upon structure of our [ADKAppKit](https://bitbucket.org/adkgroup/adk-app-kit/src/master/) as well.

- Bootstrap contains app initialization files and singletons.
###### Redux
- The boilerplate uses redux-toolkit. Reducer folder structure adheres to redux ducks architecture, and actions are FSA compliant.

###### Styling
- The boilerplate uses SCSS/Iota

###### Linting
- The eslint file adheres to ADK standards. It is mostly the CRA react eslint config, but with some overrides like warn on destructuring, no semicolons, etc.

###### Network
- The boilerplate uses the ADK singleton to manage network requests and data transforms.

###### Versioning
 - `.npmrc` at the project root tells npm to omit any prefixes in your package.json, i.e. we will _always save the exact version_ and we do not allow any patch (`~`) or minor (`^`) updates between npm installs.
#### Changing metadata

###### Favicon
- Replace /public/favicon.ico with a PNG icon. Done!

###### Additional libraries
- Need to search through a large dataset? [Fuse](https://fusejs.io/)
- Need time limited redux-persist data? [redux-persist-expire](https://github.com/kamranahmedse/redux-persist-expire)
- Need to reset the entire reducer state? [redux-reset](https://github.com/wwayne/redux-reset) 
**^^ Warning: Redux-Reset doesn't exactly like redux-persist [issue](https://github.com/wwayne/redux-reset/issues/7)** 
