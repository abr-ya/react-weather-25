import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CityPage, HomePage } from "./pages";
import { Layout } from "./components/";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/city/:cityName" element={<CityPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
