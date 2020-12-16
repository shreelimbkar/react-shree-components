"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: center;\n  padding: 8px 16px;\n  color: white;\n  background-color: rebeccapurple;\n  border: 1px solid;\n  border-color: rebeccapurple;\n  border-radius: 20px;\n  font-family: sans-serif;\n  font-size: 16px;\n  text-decoration: none;\n  &:hover:not(:disabled),\n  &:active:not(:disabled),\n  &:focus {\n    outline: 0;\n    color: white;\n    border-color: salmon;\n    background-color: salmon;\n    cursor: pointer;\n  }\n  &:disabled {\n    opacity: 0.6;\n    filter: saturate(60%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Button = _styledComponents.default.button(_templateObject());

Button.propTypes = {
  disabled: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};
var _default = Button;
exports.default = _default;