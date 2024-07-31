import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar sticky bg-base-100 border-b border-gray-800 uppercase">
      <div className="flex w-full  justify-between items-center">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Reseda photographie
        </Link>
        <div>
          <Link to={"/offer"} className="btn btn-ghost">
            Services
          </Link>
          <Link to={"/gallery"} className="btn btn-ghost">
            Galerie
          </Link>
          <Link to={"/informations"} className="btn btn-ghost">
            Informations
          </Link>
          <Link to={"/programSession"} className="btn btn-ghost">
            Programmer une séance photo
          </Link>
        </div>
      </div>
    </div>
  );
}
