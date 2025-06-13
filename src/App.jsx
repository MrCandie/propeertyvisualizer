import { lazy, Suspense } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));
const Floor = lazy(() => import("./pages/floors/Floor"));
const Apartments = lazy(() => import("./pages/apartments/Apartments"));
const ViewApartment = lazy(() =>
  import("./pages/view-apartment/ViewApartment")
);

const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/tower/:id" element={<Floor />} />
    <Route path="/floor/:id/:floorId" element={<Apartments />} />
    <Route
      path="/apartment/:id/:floorId/:apartmentId"
      element={<ViewApartment />}
    />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
