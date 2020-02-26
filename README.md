![ADK Logo](./adk.svg)

This is a [React](https://facebook.github.io/react/) starter kit built by [ADK Group](https://adkgroup.com/). It contains many common dependencies, configurations, and scripts to get you up and running quickly.

The ADK React standards used in this repository are documented [here](https://adkgroup.atlassian.net/wiki/spaces/FH/overview) on Confluence.

###### Preconfigured dependencies:
- [Docker](https://www.docker.com/) and [Fargate](https://aws.amazon.com/fargate/) deploy scripts
- [Javascript Obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator)
- [React-router](https://reacttraining.com/react-router/)
- [Redux persist](https://github.com/rt2zz/redux-persist)
- [Redux optimist](https://github.com/ForbesLindesay/redux-optimist)
- [Bugsnag](https://www.bugsnag.com/)
- Websocket manager

Other useful configurations
- apple-app-site-association file generation per environment if the project also has a mobile app that requires deep linking (see ADK app kit for deep linking examples)
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

**Note**: This repository can and should be modified! If you run into any issues or would like to propose changes, please submit a PR with Drew Andre as a reviewer. Thanks!

### Table of Contents 

- [Architecture overview](#architecture-overview)
- [Getting started](#getting-started)
- [Changing metadata](#changing-metadata)
- [Environment variables](#environment-variables)
- [Deploying](#deploying)
- [Upgrading](#upgrading)
- [Additional Libraries](#Additional-libraries)
- [Tips and tricks](#tips-and-tricks)

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

#### Environment setup
- Download [Node](https://nodejs.org/en/) and [node package manager](https://www.npmjs.com/) (npm). **ADK Group uses npm, not yarn.**

#### How to run
- Clone the repository _(ensure you have uploaded an SSH key to the ADK bitbucket account)_
`$ git clone git@bitbucket.org:adkgroup/ak-web-kit-fe.git`
- Install node dependencies
`npm install`
- Create '.env.development'
`Place REACT_APP_WEB_BUGSNAG_API_KEY='{valueHere}' inside of .env.development, If you don't have a valid key, use any value.`
- Start node server
`npm start`

#### Changing metadata

###### Favicon
- Replace /public/favicon.ico with a PNG icon. Done!

#### Deploying

###### Overview
ADK App Kit uses [Deploybot](https://deploybot.com/) for deployment. Webpack is used under the hood for build automation. Please see Mike for deploybot setup and Aaron for access.

###### Bugsnag
- Bugsnag comes pre-configured and you can use `bugsnagClient.notify(error)` anywhere in the app. `BUGSNAG_CLIENT_ID` should be modified to point to your bugsnag application, otherwise it will be pointed to the ADKWebKit app by default.

###### Additional libraries
- Need to search through a large dataset? [Fuse](https://fusejs.io/)
- Need time limited redux-persist data? [redux-persist-expire](https://github.com/kamranahmedse/redux-persist-expire)
- Need to reset the entire reducer state? [redux-reset](https://github.com/wwayne/redux-reset) 
**^^ Warning: Redux-Reset doesn't exactly like redux-persist [issue](https://github.com/wwayne/redux-reset/issues/7)** 

#### TODO:
- Tests!
- Swagger mock endpoint for login (need example app setup)
- Localization
- Websocket examples
- Add version to main screen (if __DEV__)
- How to submit PR