import { useDispatch } from "react-redux";

import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme
} from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined
} from "@mui/icons-material";

import PropTypes from "prop-types";

import { setMode } from "../redux/globalSlice";

import FlexBetween from "./FlexBetween";

export default function NavBar({ user, isSidebarOpen, setIsSidebarOpen }) {
  const dispatch = useDispatch();
  const theme = useTheme();

  console.log(user);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  user: PropTypes.exact({
    city: PropTypes.string,
    country: PropTypes.string,
    createdAt: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    occupation: PropTypes.string,
    password: PropTypes.string,
    phoneNumber: PropTypes.string,
    role: PropTypes.string,
    state: PropTypes.oneOf([null, PropTypes.string]),
    transactions: PropTypes.arrayOf(PropTypes.string),
    updatedAt: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string
  }).isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired
};
