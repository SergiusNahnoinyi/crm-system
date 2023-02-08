import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Box, useMediaQuery } from "@mui/material";

import { useSelector } from "react-redux";
import { useGetUserQuery } from "../redux/api";

import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
        user={data || {}}
        drawerWidth="250px"
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <NavBar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
}
