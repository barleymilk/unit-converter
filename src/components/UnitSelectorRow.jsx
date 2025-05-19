// components/UnitSelectorRow.jsx
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export default function UnitSelectorRow({
  unitOptions,
  unitFrom,
  unitTo,
  handleFromChange,
  handleToChange,
  handleSwap,
}) {
  return (
    <Grid container>
      <Grid style={{ marginTop: "24px", width: "40%" }}>
        <FormControl sx={{ minWidth: 120, width: "100%" }}>
          <InputLabel id="from-label">From</InputLabel>
          <Select
            labelId="from-label"
            value={unitFrom}
            label="From"
            onChange={handleFromChange}
          >
            {Object.keys(unitOptions).map((v, i) => (
              <MenuItem key={i} value={v}>
                {v}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid
        style={{
          marginTop: "24px",
          width: "20%",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <Button color="black" onClick={handleSwap}>
          <SwapHorizIcon />
        </Button>
      </Grid>
      <Grid style={{ marginTop: "24px", width: "40%" }}>
        <FormControl sx={{ minWidth: 120, width: "100%" }}>
          <InputLabel id="to-label">To</InputLabel>
          <Select
            labelId="to-label"
            value={unitTo}
            label="To"
            onChange={handleToChange}
          >
            {Object.keys(unitOptions).map((v, i) => (
              <MenuItem key={i} value={v}>
                {v}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
