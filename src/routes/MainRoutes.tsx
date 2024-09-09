import { Box } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function MainRoutes() {

    return(
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: "/",
                    element: <Box>Home</Box>
                },
                {
                    path: "/p/:id",
                    element: <Box>Pokemon Detail</Box>
                },
            ])}
        />
    )
}