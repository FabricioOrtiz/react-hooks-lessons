import { Suspense } from 'react';
import { routes } from './routes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';


export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>

            <ul>
              {
                routes.map(route => {
                  return (
                    <li key={route.to}>
                      <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.name}</NavLink>
                    </li>)
                })
              }

            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            {routes.map(({ to, path, Component }) => {
              return (
                <Route key={to} path={path} element={<Component></Component>}>
                </Route>
              )
            })}

            <Route path="/*" element={<Navigate to={routes[0].to} replace></Navigate>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}