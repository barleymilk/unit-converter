import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ConverterForm from "./components/ConverterForm";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1 style={{ textAlign: "center" }}>단위 변환기</h1>
        <ConverterForm />
      </Container>
    </>
  );
}

export default App;
