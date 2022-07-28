"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getservice = void 0;

var getservice = function getservice(path) {
  var requestOptions, res;
  return regeneratorRuntime.async(function getservice$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(path, requestOptions));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          return _context.abrupt("return", _context.sent);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getservice = getservice;
//# sourceMappingURL=customservice.dev.js.map
