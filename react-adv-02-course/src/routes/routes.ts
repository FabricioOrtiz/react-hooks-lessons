import { LazyExoticComponent, lazy } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages/01-lazyload";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component:LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

const Lazy1 = lazy(() => import('../pages/01-lazyload/LazyPage01'));
const Lazy2 = lazy(() => import('../pages/01-lazyload/LazyPage02'));
const Lazy3 = lazy(() => import('../pages/01-lazyload/LazyPage03'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'lazy1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'lazy2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: LazyPage3,
        name: 'lazy3'
    }
]