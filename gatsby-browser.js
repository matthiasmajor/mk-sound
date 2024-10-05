const React = require("react");
const { MainTemplate } = require("../mksound/src/components/MainTemplate");

exports.wrapPageElement = ({ element, props }) => (
  <MainTemplate {...props}>{element}</MainTemplate>
);
