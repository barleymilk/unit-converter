export const convert = (category, value, from, to) => {
  const num = parseFloat(value);
  if (isNaN(num)) return "";
  if (category === "길이") {
    return convertLength(num, from, to);
  } else if (category === "온도") {
    return convertTemperature(num, from, to);
  }
};

// 길이 변환
function convertLength(value, fromUnit, toUnit) {
  const toMeter = {
    킬로미터: 1000,
    미터: 1,
    센티미터: 0.01,
    밀리미터: 0.001,
    마이크로미터: 1e-6,
    나노미터: 1e-9,
    마일: 1609.344,
    야드: 0.9144,
    피트: 0.3048,
    인치: 0.0254,
    해리: 1852,
  };

  const meterValue = value * toMeter[fromUnit];
  const convertedValue = meterValue / toMeter[toUnit];
  return convertedValue;
}

// 온도 변환
function convertTemperature(value, from, to) {
  const celsius =
    from === "섭씨"
      ? value
      : from === "화씨"
        ? (value - 32) * (5 / 9)
        : from === "켈빈"
          ? value - 273.15
          : value;

  if (to === "섭씨") return celsius;
  if (to === "화씨") return (celsius * 9) / 5 + 32;
  if (to === "켈빈") return celsius + 273.15;
}
