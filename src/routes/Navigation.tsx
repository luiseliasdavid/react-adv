
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading..</span>}>
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({ to, name }) => {
              return (
                <li key={name}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <Routes>
          {routes.map(({ name, path, Component }) => (
            <Route key={name} path={path} element={<Component />} />
          ))}

          <Route path="/*" element={routes[0].to} />
        </Routes>
      </div>
    </BrowserRouter>
  </Suspense>);
};
