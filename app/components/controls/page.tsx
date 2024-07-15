"use client";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import {
  Box,
  Checkbox,
  Fab,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useState } from "react";

export default function Page() {
  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <Grid display="flex" flexDirection="row" gap="20px">
      <Grid>
        <Grid xs={2}>
          <Typography>Check boxes</Typography>
          <Stack>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Required"
              />
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Disabled"
              />
              <FormControlLabel
                label="Custom"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
              />
            </FormGroup>
          </Stack>
        </Grid>
        <Grid xs={2}>
          <div>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          </div>
        </Grid>
      </Grid>
      <Grid xs={2}>
        <Typography>Floating Buttons</Typography>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </Box>
      </Grid>
      <Grid xs={2}>
        <Typography>
          Radio checks
        </Typography>
        <div>
          <Radio {...controlProps("a")} />
          <Radio {...controlProps("b")} color="secondary" />
          <Radio {...controlProps("c")} color="success" />
          <Radio {...controlProps("d")} color="default" />
          <Radio
            {...controlProps("e")}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        </div>
      </Grid>
      <Grid xs={2}>
        <Typography>
          Toggle Buttons
        </Typography>
      <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" disabled>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}
