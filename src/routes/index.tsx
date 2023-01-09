import { Routes, Route } from "react-router-dom";
import {CategoriasPage, EquipePage, HomePage} from "../views";

export const Router = (): JSX.Element => (
  <Routes>
    <Route path="/" element={ <HomePage/>}/>
    <Route path="/categorias" element={ <CategoriasPage/>}/>
    <Route path="/equipe" element={ <EquipePage/>}/>
  </Routes>
);
