const {captionVtt1, captionText1} = require("./const");
const {vttToPlainText} = require("../index");

test('remove webvtt header', () => {
  expect( vttToPlainText(captionVtt1)).toBe(captionText1);
});
