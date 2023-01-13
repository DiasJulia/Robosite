import { Routes, Route } from "react-router-dom";
import {CategoriasPage, EquipePage, HomePage, PublicacoesPage} from "../views";

export const Router = (): JSX.Element => (
  <Routes>
    <Route path="/" element={ <HomePage/>}/>
    <Route path="/categorias" element={ <CategoriasPage/>}/>
    <Route path="/equipe" element={ <EquipePage/>}/>
    <Route path="/publicacoes" element={ <PublicacoesPage/>}/>
  </Routes>
);
