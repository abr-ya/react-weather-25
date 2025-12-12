import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CityPage, HomePage } from "./pages";
import { Layout } from "./components/";
import { ThemeProvider } from "./providers/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { defaultOptions } from "./api/config";

const queryClient = new QueryClient({ defaultOptions });

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/city/:city" element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
