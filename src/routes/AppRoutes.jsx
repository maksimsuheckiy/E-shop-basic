import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Favorites from "../pages/Favorites/Favorites";
import Page404 from "../pages/NotFound/Page404";

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/favorites' component={Favorites}/>
            <Route component={Page404}/>
        </Switch>
    )
}

export default AppRoutes