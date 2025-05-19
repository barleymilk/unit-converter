import { useState } from "react";
import { unitOptions } from "../db/unitData";
import { allowOnlyNumbers } from "../utils/allowOnlyNumbers";
import { convert } from "../utils/conversionFunctions";
import { Box } from "@mui/material";

import CategorySelector from "./CategorySelector";
import ValueInputRow from "./ValueInputRow";
import UnitSelectorRow from "./UnitSelectorRow";

const unitCategories = Object.keys(unitOptions);

export default function ConverterForm() {
  const [unitCategory, setUnitCategory] = useState("길이");
  const [unitFrom, setUnitFrom] = useState("킬로미터");
  const [unitTo, setUnitTo] = useState("미터");
  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(1000);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const from = Object.keys(unitOptions[category])[0];
    const to = Object.keys(unitOptions[category])[1];
    const initValue = ["길이", "면적"].includes(category) ? 1 : 0;
    setUnitCategory(category);
    setUnitFrom(from);
    setUnitTo(to);
    setFromValue(initValue);
    setToValue(convert(category, initValue, from, to));
  };

  const handleFromChange = (e) => {
    const val = e.target.value;
    if (val === unitTo) {
      setUnitFrom(val);
      setUnitTo(unitFrom);
      setToValue(convert(unitCategory, fromValue, val, unitFrom));
    } else {
      setUnitFrom(val);
      setToValue(convert(unitCategory, fromValue, val, unitTo));
    }
  };

  const handleToChange = (e) => {
    const val = e.target.value;
    if (val == unitFrom) {
      setUnitFrom(unitTo);
      setUnitTo(val);
      setToValue(convert(unitCategory, fromValue, unitTo, val));
    } else {
      setUnitTo(val);
      setToValue(convert(unitCategory, fromValue, unitFrom, val));
    }
  };

  const handleSwap = () => {
    setUnitFrom(unitTo);
    setUnitTo(unitFrom);
    setToValue(convert(unitCategory, fromValue, unitTo, unitFrom));
  };

  const handleFromValueChange = (e) => {
    const val = e.target.value;
    setFromValue(val);
    setToValue(convert(unitCategory, val, unitFrom, unitTo));
  };

  const handleToValueChange = (e) => {
    const val = e.target.value;
    setFromValue(convert(unitCategory, val, unitTo, unitFrom));
    setToValue(val);
  };

  return (
    <Box sx={{ bgcolor: "#CCC", width: "100%", p: 3, borderRadius: "14px" }}>
      <CategorySelector
        unitCategory={unitCategory}
        unitCategories={unitCategories}
        handleChange={handleCategoryChange}
      />
      <ValueInputRow
        fromValue={fromValue}
        toValue={toValue}
        unitFrom={unitFrom}
        unitTo={unitTo}
        unitLabelMap={unitOptions[unitCategory]}
        onFromChange={handleFromValueChange}
        onToChange={handleToValueChange}
        onKeyDown={allowOnlyNumbers}
      />
      <UnitSelectorRow
        unitOptions={unitOptions[unitCategory]}
        unitFrom={unitFrom}
        unitTo={unitTo}
        handleFromChange={handleFromChange}
        handleToChange={handleToChange}
        handleSwap={handleSwap}
      />
    </Box>
  );
}
