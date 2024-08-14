import { NavLink } from "react-router-dom";
import { mobnav } from "../constants/nav";

const MobileNav = () => {
  return (
    <section className="md:hidden h-12 bg-neutral-600 bg-opacity-75 fixed bottom-0 w-full shadow-md">
      <div className="flex items-center justify-around h-full">
        {mobnav.map((nav) => (
          <NavLink
            key={nav.label + "mobnav"}
            to={nav.href}
            className={({ isActive }) =>
              `flex flex-col items-center px-3 py-2 transition-colors ${
                isActive ? "text-neutral-100" : "text-neutral-500"
              } hover:text-neutral-100`
            }
          >
            <p className="text-sm">{nav.label}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default MobileNav;
