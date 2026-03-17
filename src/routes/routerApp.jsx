import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import Register from "../pages/Register"


export let routerApp=[
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>

    },
    {
        path:"/register",
        element:<Register/>
    }

]