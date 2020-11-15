import React from 'react'
import * as paths from './paths'

const HomePage = React.lazy(() => 
    import(/* webpackChunkName: "HomePage" */ '../pages/HomePage')
)

const AboutPage = React.lazy(() => 
    import(/* webpackChunkName: "AboutPage" */ '../pages/AboutPage')
)

const CrearCriticaPage = React.lazy(() => 
    import(/* webpackChunkName: "CrearCriticaPage" */ '../pages/CrearCriticaPage')
)

const NotFound = React.lazy(() =>
    import(/* webpackChunkName: "NotFound" */ '../pages/NotFound')
)

const publicRoutes = [
    {
        path: paths.HOME_PAGE,
        exact: true,
        component: HomePage
    },
    {
        path: paths.ABOUT_PAGE,
        exact: true,
        component: AboutPage
    },
    {
        path: paths.CREAR_CRITICA_PAGE,
        exact: true,
        component: CrearCriticaPage
    },
    {
        path: paths.NOT_FOUND,
        exact: true,
        component: NotFound
    },
    
]


export default publicRoutes