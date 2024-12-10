"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";

export default function Header() {
  const NoSSRThemeColor = dynamic(
    () => import("../components/themeProvider/theme-provider"),
    { ssr: false }
  );

  const menuItems = [
    { name: "TRADES", href: "#", isActive: true },
    { name: "POLITICIANS", href: "#", isActive: false },
    { name: "ISSUERS", href: "#", isActive: false },
    { name: "INSIGHTS", href: "#", isActive: false },
    { name: "BUZZ", href: "#", isActive: false },
    { name: "PRESS", href: "#", isActive: false },
  ];
  const dropdownItems = [
    { name: "COMMITTEES", href: "#" },
    { name: "STATES", href: "#" },
    { name: "ABOUT US", href: "#" },
  ];

  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.open = false;
      setIsDropdownOpen(false);
    }
  };

  const handleDropdownToggle = (
    event: React.SyntheticEvent<HTMLDetailsElement>
  ) => {
    setIsDropdownOpen(event.currentTarget.open);
  };

  return (
    <>
      <div className="navbar  bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 justify-between">
        <div className="container flex  items-center justify-between mx-auto p-4">
          <div className="navbar-start">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 0 114.833 26"
                width="114.833"
              >
                <g fill="none">
                  <path
                    className="logotype"
                    fill="white"
                    d="M114.833 14.662V11.267h-6.862V0.578H104v14.083zM102.412 10.474c0.433 -0.867 0.578 -1.805 0.578 -2.888 0 -1.012 -0.145 -1.95 -0.578 -2.888a7.475 7.475 0 0 0 -1.588 -2.238 7.648 7.648 0 0 0 -5.417 -2.167 7.8 7.8 0 0 0 -5.488 2.167 7.15 7.15 0 0 0 -1.588 2.383 7.042 7.042 0 0 0 -0.578 2.817c0 1.083 0.217 2.021 0.578 2.888a7.475 7.475 0 0 0 1.588 2.312 7.648 7.648 0 0 0 5.417 2.167 7.8 7.8 0 0 0 5.488 -2.167 6.825 6.825 0 0 0 1.588 -2.383m-2.238 -4.333 -2.817 2.167 1.012 3.612 -2.888 -2.167 -2.888 2.167 1.012 -3.612 -2.745 -2.167 3.467 -0.071 1.155 -3.467 1.155 3.467zm-16.828 -2.167h4.262V0.578H75.112v3.395h4.262v10.688h3.9V3.971Zm-12.857 10.686h3.9v-14.083h-3.9zM69.261 7.8a5.027 5.027 0 0 0 0.505 -2.167v-0.071c0 -0.795 -0.145 -1.445 -0.433 -2.167A4.16 4.16 0 0 0 68.177 1.95a4.983 4.983 0 0 0 -1.878 -1.012 8.233 8.233 0 0 0 -2.383 -0.362h-6.138v14.083h3.9V10.688h1.95c0.867 0 1.662 -0.145 2.383 -0.362s1.445 -0.505 1.95 -0.938A4.658 4.658 0 0 0 69.262 7.8M65.866 5.778c0 0.505 -0.217 1.012 -0.65 1.3 -0.362 0.362 -0.938 0.505 -1.662 0.505H61.75V3.828h1.805c0.721 0 1.3 0.145 1.662 0.505 0.433 0.288 0.65 0.721 0.65 1.445m-12.638 8.883h4.262L51.421 0.433H47.667l-5.995 14.228h4.117L46.8 12.133h5.417zm-2.167 -5.488h-3.105l1.588 -4.118L51.133 9.1ZM32.933 7.656v-0.071c0 -0.505 0 -1.012 0.217 -1.445a3.683 3.683 0 0 1 0.721 -1.228 3.25 3.25 0 0 1 1.012 -0.721 3.293 3.293 0 0 1 1.445 -0.362c0.65 0 1.228 0.145 1.662 0.433a4.983 4.983 0 0 1 1.371 1.228l2.527 -2.601 -0.721 -0.867c-0.433 -0.362 -0.867 -0.721 -1.371 -0.938a6.933 6.933 0 0 0 -1.517 -0.65 8.883 8.883 0 0 0 -2.021 -0.145c-1.083 0 -2.021 0.145 -2.888 0.578a6.717 6.717 0 0 0 -2.383 1.517c-0.721 0.721 -1.228 1.445 -1.588 2.383a7.583 7.583 0 0 0 -0.578 2.888 7.215 7.215 0 0 0 2.167 5.2 6.717 6.717 0 0 0 2.238 1.589c0.867 0.362 1.805 0.578 2.888 0.578a8.45 8.45 0 0 0 2.021 -0.288q0.975 -0.217 1.733 -0.65a5.85 5.85 0 0 0 1.371 -1.012l1.083 -1.228 -2.888 -2.167a6.283 6.283 0 0 1 -1.445 1.3l-0.795 0.362 -1.012 0.071a2.882 2.882 0 0 1 -1.371 -0.288c-0.433 -0.145 -0.721 -0.433 -1.083 -0.721a3.683 3.683 0 0 1 -0.721 -1.228 4.55 4.55 0 0 1 -0.145 -1.445Zm-0.867 17.912h0.795v-6.933h2.745v-0.721h-6.212v0.721H32.067zm13.721 0 -1.95 -2.6c0.578 -0.217 1.012 -0.505 1.3 -0.938 0.288 -0.362 0.505 -0.867 0.505 -1.445 0 -0.867 -0.288 -1.445 -0.867 -1.95 -0.505 -0.505 -1.3 -0.721 -2.312 -0.721h-2.888v7.655h0.868v-2.456h2.671l1.733 2.455h0.867ZM42.467 22.462h-2.021V18.633H42.467c0.721 0 1.3 0.145 1.733 0.505 0.362 0.288 0.578 0.721 0.578 1.445a2.167 2.167 0 0 1 -0.578 1.445q-0.65 0.433 -1.733 0.433M55.971 25.567h0.867L53.3 17.912h-0.795L48.967 25.568h0.867l0.938 -2.021H55.033zm-4.912 -2.671 1.878 -4.117 1.805 4.117h-3.612Zm9.75 2.671h3.105c0.867 0 1.517 -0.145 2.167 -0.505a3.618 3.618 0 0 0 1.445 -1.3c0.362 -0.578 0.505 -1.3 0.505 -2.021s-0.145 -1.445 -0.505 -2.021a3.618 3.618 0 0 0 -1.445 -1.3c-0.65 -0.362 -1.3 -0.505 -2.167 -0.505h-3.105zm0.795 -0.721V18.633H63.916c0.721 0 1.228 0.145 1.733 0.362 0.505 0.288 0.938 0.721 1.228 1.083a4.052 4.052 0 0 1 0 3.321 2.752 2.752 0 0 1 -1.228 1.083 3.618 3.618 0 0 1 -1.733 0.362zm11.845 0v-2.817h3.971v-0.721H73.45v-2.671h4.405v-0.721H72.583v7.655h5.417v-0.721zm11.338 0.795c0.65 0 1.155 -0.071 1.588 -0.288 0.433 -0.145 0.721 -0.433 0.938 -0.721 0.217 -0.362 0.362 -0.721 0.362 -1.083 0 -0.433 -0.145 -0.795 -0.362 -1.083a2.167 2.167 0 0 0 -0.938 -0.65c-0.288 -0.145 -0.721 -0.288 -1.3 -0.362a13 13 0 0 1 -1.155 -0.362 1.733 1.733 0 0 1 -0.721 -0.433c-0.145 -0.217 -0.217 -0.433 -0.217 -0.721 0 -0.433 0.145 -0.721 0.505 -1.012 0.288 -0.288 0.795 -0.433 1.445 -0.433l1.083 0.217 1.083 0.433 0.288 -0.65a4.333 4.333 0 0 0 -1.083 -0.433 4.875 4.875 0 0 0 -1.3 -0.217c-0.65 0 -1.155 0.071 -1.588 0.288 -0.433 0.145 -0.721 0.433 -0.938 0.721a1.885 1.885 0 0 0 -0.288 1.083c0 0.505 0.071 0.867 0.362 1.083q0.325 0.433 0.867 0.65l1.371 0.433 1.083 0.288c0.217 0.071 0.505 0.217 0.721 0.433 0.217 0.145 0.288 0.433 0.288 0.721a1.148 1.148 0 0 1 -0.505 1.012 2.882 2.882 0 0 1 -1.517 0.362A4.333 4.333 0 0 1 83.416 24.628a2.86 2.86 0 0 1 -1.083 -0.65l-0.362 0.65c0.288 0.288 0.721 0.505 1.228 0.721a3.64 3.64 0 0 0 1.588 0.288"
                  ></path>
                  <path
                    className="flag-red"
                    fill="#c23131"
                    d="M23.688 12.278v-1.95l-9.388 7.367 -6.138 -2.671 -7.8 5.344v1.805l7.8 -5.417 6.212 2.671 9.317 -7.221Zm-15.528 1.083 6.212 2.745 9.317 -7.221V7.005l-9.244 7.439 -6.283 -2.888m0 -1.517 6.212 2.671 9.317 -7.221V3.755L14.445 11.05 8.233 8.378m0 -1.662 6.212 2.745L23.688 2.167V0.362l-9.388 7.367L8.162 4.983m0 13.362 -7.8 5.344v1.805l7.8 -5.488 6.212 2.745 9.317 -7.221v-1.806L14.445 21.017 8.233 18.345Z"
                  ></path>
                  <path
                    className="flag-blue"
                    fill="#186cea"
                    d="m0.362 18.85 7.8 -5.417v-1.733l-7.8 5.345v1.733m7.8 -10.471 -7.8 5.416v1.805l7.8 -5.416m0 -5.055 -7.8 5.271V12.133l7.8 -5.417"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuItems.map(({ name, href, isActive }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className={`block py-2  ${
                      isActive
                        ? "border-b-2 rounded-none text-black font-semibold text-size-3 text-txt-dimmer md:bg-transparent  md:dark:text-txt-dimmer hover:text-txt-dim"
                        : "text-gray-900 font-semibold text-size-3 text-txt-dimmer hover:text-txt-dim md:hover:bg-transparent md:border-0 md:hover:text-txt-dim dark:text-txt-dimmer md:dark:hover:text-txt-dim dark:hover:text-txt-dim  md:dark:hover:bg-transparent"
                    }`}
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li>
                <details
                  ref={dropdownRef}
                  open={isDropdownOpen}
                  onToggle={handleDropdownToggle}
                >
                  <summary>MORE</summary>
                  <ul className="p-2 bg-[#2e3238] w-[max-content] right-0 z-[1]">
                    {dropdownItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          onClick={() => closeDropdown()}
                          className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <NoSSRThemeColor />
              </li>
            </ul>
          </div>
          <div className="navbar-end lg:hidden flex">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm bg-[#2e3238] w-[max-content] dropdown-content  rounded-box z-[1] mt-3  p-2 shadow right-0"
              >
                {menuItems.map(({ name, href, isActive }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className={`block py-2  ${
                        isActive
                          ? "border-b-2 rounded-none text-black font-semibold text-size-3 text-txt-dimmer md:bg-transparent  md:dark:text-txt-dimmer hover:text-txt-dim"
                          : "text-gray-900 font-semibold text-size-3 text-txt-dimmer hover:text-txt-dim md:hover:bg-transparent md:border-0 md:hover:text-txt-dim dark:text-txt-dimmer md:dark:hover:text-txt-dim dark:hover:text-txt-dim  md:dark:hover:bg-transparent"
                      }`}
                    >
                      {name}
                    </a>
                  </li>
                ))}
                <li>
                  <details ref={dropdownRef}>
                    <summary>MORE</summary>
                    <ul className="p-2 bg-[#2e3238] w-[max-content] right-0 z-[1]">
                      {dropdownItems.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.href}
                            onClick={() => closeDropdown()}
                            className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
