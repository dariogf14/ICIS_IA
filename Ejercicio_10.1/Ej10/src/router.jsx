import {
  createBrowserRouter
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import CountryDetails from "./pages/CountryDetails";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

export async function countriesLoader() {
  const res = await fetch(
    "https://restcountries.com/v3.1/region/europe"
  );

  if (!res.ok) {
    throw new Response("Error al cargar países", { status: 500 });
  }

  return res.json();
}

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    loader: countriesLoader,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "country/:countryName",
        element: <CountryDetails />
      }
    ]
  }
]);

export default router;