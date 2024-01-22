import { createTheme } from "@mui/material/styles";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./pages/Sales/Sales";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sales" element={<Layout />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
