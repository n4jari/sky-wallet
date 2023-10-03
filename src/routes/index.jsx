import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from './../common/NotFound';
import Login from "../components/Login";
import Create from "../components/Create";
import Deposit from "../components/Deposit";
import Withdraw from "../components/Withdraw";
import Transfer from "../components/Transfer";
import Information from './../components/Information/Information';

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Information />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/create",
                element: <Create />
            },
            {
                path: "/deposit",
                element: <Deposit />
            },
            {
                path: "/withdraw",
                element: <Withdraw />
            },
            {
                path: "/transfer",
                element: <Transfer />
            },
        ],

    }
], {
    basename: "/sky-wallet"
})