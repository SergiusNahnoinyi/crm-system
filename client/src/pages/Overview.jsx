import { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";

import Heading from "../components/Heading";
import OverviewChart from "../components/OverviewChart";

export default function Overview() {
  const [view, setView] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
      <Heading
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
}
