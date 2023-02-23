import {
  GridColumnMenuContainer,
  GridFilterMenuItem,
  HideGridColMenuItem
} from "@mui/x-data-grid";

import PropTypes from "prop-types";

export default function CustomColumnMenu(props) {
  const { hideMenu, currentColumn, open } = props;

  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
}

CustomColumnMenu.propTypes = {
  hideMenu: PropTypes.func.isRequired,
  currentColumn: PropTypes.shape({}).isRequired,
  open: PropTypes.bool.isRequired
};
