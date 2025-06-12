import "./styles.css";
import Form from "./components/form/Form.js";
import ConfirmFormComponent from "./components/form/ConfirmFormComponent.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reducer from "./reduxs/reducer.js";
import {} from "redux";

export default function App() {
  //const store = reducer.
  const randomNum = Math.random();
  let typeName = "error";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Form />} />
        <Route path="/form" element={<Form />} />
        <Route path="/confirm-form" element={<ConfirmFormComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
