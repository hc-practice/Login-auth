![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Login/Auth

### Author: Heather Cherewaty

#### Collaborated with:  Becca Lee and Brent Woodward

### Links and Resources

* [repo](https://github.com/hcherewaty/Login-auth)
* [code sandbox](https://codesandbox.io/s/github/hcherewaty/Login-auth/tree/master/)
* [travis](https://www.travis-ci.com/hcherewaty/Login-auth)


### Modules
#### `index.js`
##### Exported Values and Methods

#### `index.js`
Renders the `CMS` component, sets up browser router, and connects to redux store, providing it to all components.  `index.js` App component rendered via `root` on `index.html`.

#### `cms.js`
Renders the `Login`, `Models`, `Record`, and `Records` components, sets up `Browser Router`, and connects to redux store; providing it to all components.  Nests components within `LoginContext` to pass context (state) to child components. Nests `Models`, `Records`, and `Record` components within `Auth` component with "read" capability to be run after successful login.  Nests `Record` component within `Auth` component with "update" or "create" capability.

#### `models.js`
Renders `models` from data returned from API call.  Handles `onClick` events when choosing a model.

#### `records.js`
Information is rendered after model condition is satifised in `When` component. 
Renders `records` data from API call after a `model` is choosen. Handles `onClick` events for getting specific record data and for deleting a record from DB. Wraps `<span>` with "delete" functionality within `Auth` component that has "delete" capability.

#### `record.js`
Information is rendered after schema/model condition is satifised in `When` component. Renders `record` data within `Form` component for chosen record. Handles `onSubmit` events when a chosen record is updated or added to DB.  Also, gets records and schemas for models.

#### `actions.js`
Receives actions to dispatch from redux store.  Dispatches action and payload to reducers in `reducers.js`.

#### `reducers.js`
Receives dispatched actions from `actions.js`. Updates state from `actions` payload to redux store.

#### `store/index.js`
Redux store configuration, `thunk` middleware applied.  Imports `reducers` for store use.

#### `auth.js`
Authorization configuration. Defines Auth component as a consumer of `LoginContext`.  Determines capabilities of users. Provides authorization, when wrapped around a component with capabilities, to censor access based on capabilities.

#### `context.js`
Creates context component, `LoginContext` and `LoginProvider` component that provides context to all children nested within `LoginContext`.  Defines state for context, `login`, `logout`, and `setLoginState` methods.  

#### `login.js`
Defines `Login` component.  Receives state from `LoginContext` as a consumer.  Handles login submission and renders login form.

### Setup
#### `.env` requirements
API url defined in ENV.

#### Running the app 
Click on code sandbox link listed under Links and Resources. This will display web app in code sandbox.

#### Running the app Locally
* `npm i` to install package dependencies
* `npm start` will navigate to the front-end page in your browser.
* Login
    * Choose a model.
        * Choose a record.
        * Update, delete, or post a new record.


#### Tests
* To run tests use the command `npm test` or `npm test <filename>` to test individual test files:  `actions.test.js`, `records.test.js`, `reducers.test.js`.
* Assertions made: 
    * `reducers.test.js`: Do the components exist, do they render what is expected?
    * `actions.test.js`:  Are actions dispatched? 
    * `reducers.test.js`: Is initial state available, do reducers provide state change?
