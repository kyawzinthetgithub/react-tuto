import { ThemeProvider } from "./context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import { userLoader } from "./loaders/user-loader";
import UserPage from "./pages/UserPage";
import { searchUserAction } from "./actions/search-user-action";
import InfoPage from "./pages/InfoPage";

function UsersHydrateFallback() {
  return <div role="status">Loading users...</div>;
}

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
        },
        {
          path: 'users',
          element: <UserPage />,
          loader: userLoader,
          HydrateFallback: UsersHydrateFallback,
          action: searchUserAction
        },
        {
          path: '/user/:id',
          element: <InfoPage />
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
