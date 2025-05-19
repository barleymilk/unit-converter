import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function CategorySelector({
  unitCategory,
  unitCategories,
  handleChange,
}) {
  return (
    <FormControl sx={{ minWidth: 120, width: "100%" }}>
      <InputLabel id="category-label">카테고리</InputLabel>
      <Select
        labelId="category-label"
        id="category-select"
        value={unitCategory}
        label="카테고리"
        onChange={handleChange}
      >
        {unitCategories.map((v, i) => (
          <MenuItem key={i} value={v}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
