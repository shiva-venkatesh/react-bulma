"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(_ref) {
  var tagName = _ref.tagName;

  return _react2.default.createElement(
    "span",
    { className: "tag is-primary is-medium" },
    tagName
  );
};

exports.default = Tag;