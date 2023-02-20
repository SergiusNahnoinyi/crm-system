import { Box } from "@mui/material";

import Heading from "../components/Heading";
import BreakdownChart from "../components/BreakdownChart";

export default function Breakdown() {
  return (
    <Box m="1.5rem 2.5rem">
      <Heading title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
}
