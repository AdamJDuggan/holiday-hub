// React
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
// 3rd party
import classnames from "classnames";
// Components
import LogoIcon from "../LogoIcon/index.js";
// Routes
import routes from "../../routes.tsx";
// Styles
import styles from "./index.module.scss";
// Utils
import formatLink from "../../utils/formatLink.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const loggedIn = true;

  const links = useMemo(
    () =>
      loggedIn
        ? [routes.DASHBOARD, routes.HUBS, routes.ACCOUNT]
        : [routes.LOGIN, routes.SIGNUP],
    []
  );

  return (
    <div
      className={classnames(
        styles.navbar,
        open && styles.open,
        "flex justify-center"
      )}
    >
      <div
        className={classnames(
          "fixed flex justify-center w-full z-50 mix-blend-difference",
          styles.right
        )}
      >
        <div className="relative container flex items-center justify-between">
          {/* Logo on left hand side */}
          {/*<Link to={routes.HOME} onClick={() => setOpen(false)}>*/}
          <LogoIcon />
          {/* </Link> */}
          {/* Right hand side */}
          <div className="flex space-x-12">
            {/* Links- display on larger screens */}
            <div className="hidden md:inline flex space-x-6">
              {links.map((link) => (
                <a key={link} href={link.href} className="text-white">
                  {formatLink(link)}
                </a>
              ))}
            </div>
            {/* Hamburger button to open nav menu on mobile */}
            <button
              type="menu"
              className={classnames(
                "md:hidden text-white transition ease-in-out",
                styles.hamburger
              )}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <div
        className={classnames(
          "fixed top-0 left-0 w-[100vw] h-[100vh] z-20 flex justify-center text-light",
          !open && "pointer-events-none"
        )}
      >
        <div className={classnames("inset-0 fixed z-30", styles.background)} />

        <div className="relative grid place-items-center w-full p-5">
          <div className="container z-40">
            <nav className="flex flex-col justify-center h-full">
              <ul className="space-y-12">
                {links.map((link) => (
                  <li key={link} className={styles.item}>
                    <a
                      key={link}
                      href={link}
                      onClick={() => setOpen(false)}
                      className="text-blue hover:text-dark font-outfit-bold text-5xl md:text-6xl"
                    >
                      {formatLink(link)}
                    </a>
                  </li>
                ))}

                <li className={classnames("pt-6 flex space-x-6", styles.item)}>
                  <a
                    icon="linkedIn"
                    href="https://www.linkedin.com/company/version-one-dev/"
                    className="text-gray hover:text-dark"
                  >
                    Link 1
                  </a>
                  <a
                    icon="linkedIn"
                    href="https://www.linkedin.com/company/version-one-dev/"
                    className="text-gray hover:text-dark"
                  >
                    Link 1
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
