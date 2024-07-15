"use client";

import {
  CircularProgress,
  CircularProgressProps,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useState } from "react";
import CircularProgressWithLabel from "@/components/customs/ProgressWithText";
import LinearProgressWithLabel from "@/components/customs/ProgressBarWithText";

export default function Page() {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <>
      <Grid display="flex" gap="50px" flexDirection="row" spacing={2}>
        <Grid xs={2}>
          <Typography>Circular Progress </Typography>
          <Grid display="flex" flexDirection="column" gap="10px">
            <Grid display="flex" gap="10px" xs={2}>
              <CircularProgress color="error" />
              <CircularProgress color="success" />
              <CircularProgress color="info" />
              <CircularProgress color="warning" />
            </Grid>
            <Grid display="flex" gap="10px" xs={2}>
              <Box sx={{ width: 200 }}>
                <CircularProgress
                  variant="determinate"
                  value={value}
                  color="info"
                />
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1 }}
                  alignItems="center"
                >
                  <VolumeDown />
                  <Slider
                    aria-label="Volume"
                    value={value}
                    onChange={handleChange}
                  />
                  <VolumeUp />
                </Stack>
              </Box>
            </Grid>
            <Grid display="flex" gap="10px" xs={2}>
              <CircularProgressWithLabel value={value} />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={2}>
          <Typography>Progress Bars</Typography>
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
            <LinearProgress color="success" />
            <LinearProgress color="inherit" />
          </Stack>
          <LinearProgressWithLabel value={value} />
        </Grid>
      </Grid>
    </>
  );
}
