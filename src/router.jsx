import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/user/Login";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/Dashboard";

import Stuff from "./pages/stuff/Stuff";
import StuffCreate from "./pages/stuff/StuffCreate";
import StuffEdit from "./pages/stuff/StuffEdit";

import Inbound from "./pages/inbound/Inbound";
import InboundCreate from "./pages/inbound/InboudCreate";

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <Login /> },
    { path: '/profile', element: <Profile /> },
    { path: '/stuff', element: <Stuff/>},
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/stuff/create', element: <StuffCreate/>},
    { path: '/stuff/edit/:id', element: <StuffEdit/>},

    { path: '/inbound', element: <Inbound/>},
    { path: '/inbound/create', element: <InboundCreate/>}

])