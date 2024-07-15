"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { formData } from "../../lib/types";

export default function RegisterForm() {
  const [formData, setData] = useState<formData>({
    username: "",
    password: "",
    email: "",
    passwordC: "",
  });

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      usr: formData.username,
      pwd: formData.password,
      email: formData.email,
    });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Box
      sx={{
        width: 300,
        margin: "auto",
        mt: 8,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <Typography
        variant="TitleTypography"
        color="text"
        component="h1"
        gutterBottom
      >
        Register
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Username"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.username}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.passwordC}
          onChange={handleChange}
        />
        <Button type="submit" variant="ActionButton" fullWidth sx={{ mt: 2 }}>
          Register
        </Button>
      </form>
    </Box>
  );
}
