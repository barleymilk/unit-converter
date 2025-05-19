import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

const unitOptions = {
  길이: [
    "킬로미터",
    "미터",
    "센티미터",
    "밀리미터",
    "마이크로미터",
    "나노미터",
    "마일",
    "야드",
    "피트",
    "인치",
    "해리",
  ],
  데이터전송속도: ["bps", "Kbps", "Mbps", "Gbps"],
  데이터크기: ["비트", "바이트", "KB", "MB", "GB", "TB"],
  면적: ["제곱미터", "헥타르", "평", "에이커"],
  부피: ["리터", "밀리리터", "입방미터", "갤런", "온스"],
  속도: ["km/h", "m/s", "mph", "노트"],
  시간: ["초", "분", "시간", "일", "주", "년"],
  압력: ["Pa", "kPa", "bar", "atm", "psi"],
  에너지: ["줄", "킬로줄", "칼로리", "킬로칼로리", "와트시"],
  연비: ["km/L", "L/100km", "mpg"],
  온도: ["섭씨", "화씨", "켈빈"],
  주파수: ["Hz", "kHz", "MHz", "GHz"],
  질량: ["그램", "킬로그램", "톤", "파운드", "온스"],
  평면각: ["도", "라디안", "그라디안"],
};

const unitCategories = Object.keys(unitOptions);

export default function ConverterForm() {
  const [unitCategory, setUnitCategory] = useState("길이");
  // const [fromUnit, setFromUnit] = useState(unitOptions.unitCategory[0]);
  // const [toUnit, setToUnit] = useState(unitOptions.unitCategory[1]);

  const handleChange = (event) => {
    setUnitCategory(event.target.value);
  };

  return (
    <>
      <Box sx={{ minWidth: 120, bgcolor: "#007FFF" }}>
        <Grid container spacing={2}>
          <Grid>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={unitCategory}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
          </Grid>
          <Grid>아이콘</Grid>
          <Grid>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={unitCategory}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
