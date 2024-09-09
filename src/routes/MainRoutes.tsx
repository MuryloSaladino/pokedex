import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import PokeDetail from "../pages/PokeDetail";

export default function MainRoutes() {

    return(
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/p/:name",
                    element: <PokeDetail/>
                },
            ])}
        />
    )
}