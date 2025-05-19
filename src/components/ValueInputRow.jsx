// components/ValueInputRow.jsx
import { Grid, FormControl, FilledInput, InputAdornment } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";

export default function ValueInputRow({
  fromValue,
  toValue,
  unitFrom,
  unitTo,
  unitLabelMap,
  onFromChange,
  onToChange,
  onKeyDown,
}) {
  return (
    <Grid container>
      <Grid style={{ marginTop: "12px", width: "40%" }}>
        <FormControl sx={{ width: "100%" }} variant="filled">
          <FilledInput
            value={fromValue}
            onChange={onFromChange}
            onKeyDown={onKeyDown}
            endAdornment={
              <InputAdornment position="end">
                {unitLabelMap[unitFrom]}
              </InputAdornment>
            }
            inputProps={{ "aria-label": "from-value" }}
            style={{ fontSize: "2rem" }}
          />
        </FormControl>
      </Grid>
      <Grid
        style={{
          marginTop: "18px",
          width: "20%",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <DragHandleIcon />
      </Grid>
      <Grid style={{ marginTop: "12px", width: "40%" }}>
        <FormControl sx={{ width: "100%" }} variant="filled">
          <FilledInput
            value={toValue}
            onChange={onToChange}
            onKeyDown={onKeyDown}
            endAdornment={
              <InputAdornment position="end">
                {unitLabelMap[unitTo]}
              </InputAdornment>
            }
            inputProps={{ "aria-label": "to-value" }}
            style={{ fontSize: "2rem" }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
