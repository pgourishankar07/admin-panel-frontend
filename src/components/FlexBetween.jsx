const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const FlexBetween = styled(Box)({
  dispaly: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
