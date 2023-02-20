import { useMemo, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { useSelector } from "react-redux";

import { themeSettings } from "./theme";

import Layout from "./pages/Layout";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Geography = lazy(() => import("./pages/Geography"));
const Overview = lazy(() => import("./pages/Overview"));
const Daily = lazy(() => import("./pages/Daily"));
const Monthly = lazy(() => import("./pages/Monthly"));
const Breakdown = lazy(() => import("./pages/Breakdown"));

export default function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}
