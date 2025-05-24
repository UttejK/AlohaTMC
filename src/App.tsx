import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          element: <About />,
          path: "about",
        },
        {
          element: <PageNotFound />,
          path: "*",
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
      <div className="w-full ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
