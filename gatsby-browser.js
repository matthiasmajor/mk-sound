const React = require("react");
const { MainTemplate } = require("../mksound/src/Templates/MainTemplate");

exports.wrapPageElement = ({ element, props }) => (
  <MainTemplate {...props}>{element}</MainTemplate>
);
