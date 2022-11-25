"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.persistor = exports.history = void 0;

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _persist = require("./persist");

var _developmentOnly = require("redux-devtools-extension/developmentOnly");

var _reduxOptimist = _interopRequireDefault(require("redux-optimist"));

var _middleware = require("./middleware");

var _connectedReactRouter = require("connected-react-router");

var _sessionReducer = _interopRequireDefault(require("@shared/components/session/redux/sessionReducer"));

var _cardsListReducer = _interopRequireDefault(require("@features/SuperheroCard/cardsListComponent/redux/cardsListReducer"));

var _addToTeamReducer = _interopRequireDefault(require("@features/SuperheroCard/addToTeamComponent/redux/addToTeamReducer"));

var _paginationReducer = _interopRequireDefault(require("@features/SuperheroCard/cardsListComponent/redux/paginationReducer"));

var _filtersReducer = _interopRequireDefault(require("@features/FiltersComponent/redux/filtersReducer"));

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _history = require("history");

var _sagas = _interopRequireDefault(require("./sagas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var createRootReducer = function createRootReducer(history) {
  return (0, _reduxOptimist["default"])((0, _redux.combineReducers)({
    router: (0, _connectedReactRouter.connectRouter)(history),
    session: _sessionReducer["default"],
    superheroes: _cardsListReducer["default"],
    myteam: _addToTeamReducer["default"],
    page: _paginationReducer["default"],
    filters: _filtersReducer["default"]
  }));
};

var history = (0, _history.createBrowserHistory)();
exports.history = history;
var rootReducer = createRootReducer(history);
var persistedReducer = (0, _reduxPersist.persistReducer)(_persist.persistConfig, rootReducer);
var sagaMiddleware = (0, _reduxSaga["default"])();

var configureStore = function configureStore(preloadedState) {
  var store = (0, _redux.createStore)(persistedReducer, preloadedState, (0, _developmentOnly.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, _toConsumableArray(_middleware.reduxMiddleware).concat([(0, _connectedReactRouter.routerMiddleware)(history), sagaMiddleware]))));
  return store;
};

var store = configureStore({});
var persistor = (0, _reduxPersist.persistStore)(store); // process.env.NODE_ENV !== 'production' && persistor.purge();

exports.persistor = persistor;
sagaMiddleware.run(_sagas["default"]);
var _default = store;
exports["default"] = _default;