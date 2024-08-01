import { Link } from "react-router-dom";
import { navigation } from "../utils/navigation";

export default function FooterNavigation() {
  return (
    <div className="flex-1 ml-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="font-humane">
          <h3 className="text-sm font-extrabold leading-6 text-white">
            PLAN DU SITE
          </h3>
          <ul role="list" className="mt-6 uppercase  space-y-4">
            {navigation.linkToPage.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-sm leading-6 text-gray-300 hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="font-humane">
          <h3 className="text-sm font-semibold leading-6 text-white">
            NOUS SUIVRE
          </h3>
          <ul role="list" className="mt-6 uppercase  space-y-4">
            {navigation.socialMedia.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-gray-300 hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
