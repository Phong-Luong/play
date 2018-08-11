import styled from "react-emotion";

export default styled("h1")`
  position: relative;
  display: table;
  margin: 30px 0;

  &:before {
    position: absolute;
    content: "";
    bottom: 5%;
    left: 0;
    width: 35%;
    height: 2px;
    background: ${p => p.theme.styleguide.colors.primary};
  }
`;
