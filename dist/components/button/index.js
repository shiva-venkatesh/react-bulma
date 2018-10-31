'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonKeys = {
    info: 'is-info',
    dark: 'is-dark'
};

var Button = function Button(_ref) {
    var buttonText = _ref.buttonText,
        clickHandler = _ref.clickHandler,
        variant = _ref.variant,
        type = _ref.type;

    if (type) {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'a',
                { className: "button " + buttonKeys[variant], type: 'submit', onClick: clickHandler },
                buttonText
            )
        );
    } else {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'a',
                { className: "button " + buttonKeys[variant], onClick: clickHandler },
                buttonText
            )
        );
    }
};

Button.defaultProps = {
    buttonText: 'Primary',
    variant: 'dark'
};

exports.default = Button;