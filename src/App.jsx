import FormPage from "./pages/FormPage/FormPage";
import UnreachablePage from "./pages/UnreachablePage/UnreachablePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/unreachable" element={<UnreachablePage />} />
      </Routes>
    </>
  );
}

export default App;
