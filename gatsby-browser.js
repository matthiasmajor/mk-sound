const React = require("react");
const { MainTemplate } = require("./src/Templates/MainTemplate");

exports.wrapPageElement = ({ element, props }) => (
  <MainTemplate {...props}>{element}</MainTemplate>
);
