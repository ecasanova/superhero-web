"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _effects = require("redux-saga/effects");

var _reduxSagaRoutines = require("redux-saga-routines");

var _cardsListSagas = _interopRequireDefault(require("@features/SuperheroCard/cardsListComponent/redux/cardsListSagas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.all)([// external
          (0, _effects.call)(_reduxSagaRoutines.routinePromiseWatcherSaga), // app
          (0, _effects.call)(_cardsListSagas["default"])]);

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 5]]);
}

var _default = rootSaga;
exports["default"] = _default;