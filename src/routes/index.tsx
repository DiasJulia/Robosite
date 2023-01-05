import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
import {CategoriasPage, HomePage} from "../views";

export const Router = (): JSX.Element => (
  <Routes>
    <Route path="/" element={ <HomePage/>}/>
    <Route path="/categorias" element={ <CategoriasPage/>}/>
  </Routes>
);
