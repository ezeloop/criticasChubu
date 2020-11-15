import React from 'react';
import { Router as ReactRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import publicRoutes from './routes.public'

const Router = () => {
    const history = createBrowserHistory()

    return ( 
        <ReactRouter history={history}>
            <React.Suspense fallback={ <h2>Cargando...</h2> }>
                <Switch>
                   {publicRoutes.map((route) => (
                       <Route 
                           path={route.path}
                           exact={route.exact}
                           component={route.component}
                       />
                   ))} 
                </Switch>
            </React.Suspense>
        </ReactRouter> 
    );
}
 
export default Router;