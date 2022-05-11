import Dashboard from "./pages/Dashboard";
import Fornecedores from "./pages/Fornecedores";
import Insumos from "./pages/Insumos";
import Produtos from "./pages/Produtos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
        <Route path="/insumos" element={<Insumos />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </div>
  );
}

export default App;
