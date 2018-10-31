'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../tile.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tile = function Tile(_ref) {
  var text = _ref.text,
      subText = _ref.subText;

  return _react2.default.createElement(
    'div',
    { className: 'tile' },
    _react2.default.createElement(
      'h3',
      null,
      text
    ),
    _react2.default.createElement(
      'p',
      null,
      subText
    )
  );
};

exports.default = Tile;