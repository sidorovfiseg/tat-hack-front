import { FormControl, MenuItem, Select } from "@mui/material";

export default function LanguageSelector() {
  return (
    <FormControl>
      <Select>
        <MenuItem>RU</MenuItem>
        <MenuItem>EN</MenuItem>
      </Select>
    </FormControl>
  );
}
