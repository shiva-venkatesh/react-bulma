'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var headerText = _ref.headerText,
      classes = _ref.classes;

  var classList = classes ? classes.splice(' ').join(' ') : ' ';
  return _react2.default.createElement(
    'div',
    { className: 'page-top-header' },
    _react2.default.createElement(
      'div',
      { className: 'page-heading' },
      _react2.default.createElement(
        'h1',
        { className: "title is-1 " + classList },
        headerText
      )
    )
  );
};

exports.default = Header;