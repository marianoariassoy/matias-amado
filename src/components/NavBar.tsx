import { NavLink } from "react-router-dom";
import { IconDown } from "../icons/MySvgs";

const NavBar = () => {
  const HandleCategories = (category: number) => {
    const categories = document.querySelectorAll(".categories");
    const btns = document.querySelectorAll(".btn-categories");
    categories.forEach((category) => {
      category.classList.add("hidden");
    });
    btns.forEach((btn) => {
      btn.classList.remove("bg-primary");
      btn.classList.remove("text-white");
    });

    const categorySelected = document.querySelector(`#categories-${category}`);
    const btnSelected = document.querySelector(`#btn-${category}`);
    btnSelected?.classList.add("bg-primary");
    btnSelected?.classList.add("text-white");
    categorySelected?.classList.remove("hidden");
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center nav text-secondary font-bold">
        <li>
          <NavLink to="/" className="flex items-center">
            Home
          </NavLink>
        </li>
        <li>
          <button
            className="flex gap-2 items-center svg-secondary btn-categories"
            id="btn-1"
            onClick={() => HandleCategories(1)}
          >
            Cirugías <IconDown />
          </button>
        </li>
        <li>
          <button
            className="flex gap-2 items-center svg-secondary btn-categories"
            id="btn-2"
            onClick={() => HandleCategories(2)}
          >
            Inyectables <IconDown />
          </button>
        </li>
        <li>
          <button
            className="flex gap-2 items-center svg-secondary btn-categories"
            id="btn-3"
            onClick={() => HandleCategories(3)}
          >
            Aparatología y Cosmiatría <IconDown />
          </button>
        </li>
        <li>
          <NavLink to="/contacto" className="flex items-center">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
