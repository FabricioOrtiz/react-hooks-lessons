import { LazyExoticComponent, lazy } from "react";
import NoLazyLoad from "../pages/01-lazyload/NoLazyLoad";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../pages/01-lazyload";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component:LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

const LazyLayout = lazy(() => import('../pages/01-lazyload/layout/LazyLayout'));
//const Lazy2 = lazy(() => import('../pages/01-lazyload/LazyPage02'));
//const Lazy3 = lazy(() => import('../pages/01-lazyload/LazyPage03'));

export const routes: Route[] = [
   
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'lazy-1'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazyLoad,
        name: 'No Lazy'
    }
   
]