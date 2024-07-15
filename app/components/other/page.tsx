"use client";
import SimpleDialogDemo from "@/components/customs/CustomDialogue";
import CustomDrawer from "@/components/customs/CustomDrawer";
import BasicModal from "@/components/customs/CustomModal";
import SimpleSnackbar from "@/components/customs/CustomSnackBar";
import MultiThreadedSnackBar from "@/components/customs/MultiThreadedSnackBar";
import { Grid } from "@mui/material";

export default function Page() {
  return (
    <Grid display="flex" flexDirection="row" gap="50px">
      <Grid xs={2}>
        <SimpleDialogDemo />
      </Grid>
      <Grid xs={2}>
        <SimpleSnackbar />
      </Grid>
      <Grid xs={2}>
        <MultiThreadedSnackBar />
      </Grid>
      <Grid xs={2}>
        <CustomDrawer />
      </Grid>
      <Grid xs={2}>
        <BasicModal />
      </Grid>
    </Grid>
  );
}
