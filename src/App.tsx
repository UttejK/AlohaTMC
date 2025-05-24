import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          element: <Home />,
          path: "/",
        },
      ],
    },
  ]);

  return (
    <div>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-gray-100 dark:bg-gray-900">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
