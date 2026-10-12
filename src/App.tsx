import { ThemeProvider } from "./context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: <HomePage />
        },
        {
          path: "/about",
          element: <AboutPage />
        }
      ]
    }
  ]);

  return (
    <ThemeProvider>
      <>
        <RouterProvider router={router} />
      </>
    </ThemeProvider>
  );
}

export default App;
