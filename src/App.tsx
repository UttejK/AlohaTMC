import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/custom/footer";
import Navbar from "./components/custom/navbar";
import ServiceDetail from "./components/serviceDetail";
import AboutPage from "./pages/aboutPage";
import ContactUsPage from "./pages/contactUsPage";
import Home from "./pages/home";
import Services from "./pages/sections/services";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <AboutPage />,
          path: "/about",
        },
        {
          element: <Services />,
          path: "/services",
        },
        {
          element: <ServiceDetail />,
          path: "/services/:id",
        },
        {
          element: <AboutPage />,
          path: "/industries",
        },
        {
          element: <ContactUsPage />,
          path: "/contact",
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="mt-16 w-full bg-gray-100 dark:bg-gray-900">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
