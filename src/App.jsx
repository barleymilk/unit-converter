import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import ConverterForm from "./components/ConverterForm";

function App() {
  return (
    <>
      <CssBaseline />
      {/* <Container maxWidth="sm">
        <Box mt={5}>
          <Typography variant="h4" align="center" gutterBottom>
            단위 변환기
          </Typography>
          <ConverterForm onConvert={handleConvert} />
          {result && <Typography>결과: {result}</Typography>}
        </Box>
      </Container> */}
      <h1>단위 변환기</h1>
      <ConverterForm />
    </>
  );
}

export default App;
