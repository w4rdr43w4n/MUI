import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/components/Header";
import { ThemeProvider } from "@/contexts/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <CssBaseline />
              <Header />
            <Container component="main" sx={{ flex: 1, py: 3 }}>
              {children}
            </Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
