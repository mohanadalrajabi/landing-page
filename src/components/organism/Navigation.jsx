import { NavLink } from "react-router-dom";
import { landingAnchor, primaryButton } from "../../constants";
import PropTypes from "prop-types";
import withWrapper from "../HOC/withWrapper";
import Button from "../atoms/Button";

import "./styles/navigation.css";

const Navigation = ({ links }) => {
  const handleClick = () => {
    window.open("https://www.google.com", "_blank");
  };
  return (
    <div className="mb-20">
      <nav className="w-[90%] md:flex justify-between items-center">
        <ul className="flex gap-16">
          {/* <li className="md:hidden bg-emerald-400">Menu</li> */}
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.url}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          className="brand px-20 font-black	text-2xl text-[rgba(55, 68, 126, 1)]"
          to={landingAnchor.url}
        >
          {landingAnchor.label}
        </NavLink>

        <Button
          label="Buy now"
          handleClick={handleClick}
          styles={primaryButton}
        />
      </nav>
    </div>
  );
};

// Define prop types for Navigation component
Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const WrappedNavigation = withWrapper(Navigation);
export default WrappedNavigation;
