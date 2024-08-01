import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkList = ({ links }) => (
  <ul role="list" className="mt-6 uppercase space-y-4">
    {links.map((item) => (
      <li key={item.name}>
        {item.isExternal ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm leading-6 text-gray-300 hover:text-white"
          >
            {item.name}
          </a>
        ) : (
          <Link
            to={item.href}
            className="text-sm leading-6 text-gray-300 hover:text-white"
          >
            {item.name}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      isExternal: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default LinkList;
