import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "~/components/atoms/Typography";

const Root = styled.div`
  width: 100%;
`;

const Header = () => (
  <Root>
    <Typography size="title" color="red" align="center">
      YouTube Viewer
    </Typography>
  </Root>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: "",
};

export default Header;
