import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";
export function Navbar() {
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto flex  items-center justify-between py-4 sticky top-0 bg-white">
      <Link
        to="/"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
        <span className="sr-only">Logo</span>
        👋
      </Link>

      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <Link className="rounded-lg px-3 py-2" to="/">
            {" "}
            Home{" "}
          </Link>
        </li>

        <li>
          <Link className="rounded-lg px-3 py-2" to="/about">
            {" "}
            About{" "}
          </Link>
        </li>

        <li>
          <Link
            className="inline-flex items-center rounded-lg px-3 py-2"
            to="/store">
            Store
          </Link>
        </li>
        <li><Cart/></li>
      </ul>
    </nav>
  );
}
