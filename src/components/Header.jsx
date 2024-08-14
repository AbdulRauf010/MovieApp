import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { navigation } from "../constants/nav";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    if (inputSearch.trim()) {
      navigate(`/search?q=${inputSearch}`);
    }
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="Logo" width={120} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-2 ml-5">
          {navigation.map((nav) => (
            <div key={nav.label}>
              <NavLink
                to={nav.href}
                className={({ isActive }) =>
                  `px-3 hover:text-neutral-100 ${
                    isActive ? "text-neutral-100" : ""
                  }`
                }
              >
                {nav.label}
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search..."
              className="bg-transparent px-4 py-1 rounded-lg outline-none border-none hidden md:block"
              onChange={(e) => setInputSearch(e.target.value)}
              value={inputSearch}
            />
            <button type="submit" className="text-2xl text-white">
              <IoSearch />
            </button>
          </form>

          <div>
            <img
              className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all"
              src={user}
              alt="User"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
