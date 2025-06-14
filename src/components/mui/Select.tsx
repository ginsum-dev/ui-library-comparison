"use client";

import { selectList } from "@/lib/data";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";

export default function MUISelect() {
  const [fruit, setFruit] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setFruit(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: 180 }} size="small">
      <InputLabel id="demo-simple-select-label">Select a fruit</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={fruit}
        onChange={handleChange}
        label="Select a fruit"
      >
        {selectList.map(({ value, label }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
