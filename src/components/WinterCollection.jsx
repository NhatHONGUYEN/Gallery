import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import reseda13 from "/reseda (13).jpeg";
import reseda14 from "/reseda (14).jpeg";
import reseda15 from "/reseda (15).jpeg";

export default function WinterCollection() {
  return (
    <div className="winter-collection border-b border-gray-800">
      <div className="flex w-full h-screen">
        <div className="flex flex-col justify-between w-2/3 h-full pl-10 py-10">
          <h2 className="text-3xl uppercase font-bold font-humane tracking-tighter">
            Collection hiver
          </h2>
          <div>
            <p className="font-mono text-sm">
              Les photos sont des métaphores. L’abstrait devient concret et
              l’ordinaire devient déroutant. Faites preuve de clarté et
              d’assurance, et n’y réfléchissez pas trop. La beauté de votre
              histoire, c’est qu’elle va continuer à évoluer et que votre site
              peut évoluer avec elle. Votre objectif, c’est qu’il soit le reflet
              du moment présent. La suite s’écrira d’elle-même.
            </p>
            <div className="py-10">
              <Link
                to="/gallery"
                className="font-mono text-sm gap-2 underline flex"
              >
                <MoveRight size={20} strokeWidth={0.75} /> Afficher la galerie
                complète
              </Link>
            </div>
          </div>
          <img src={reseda14} alt={reseda14} />
        </div>
        <div className="flex flex-col w-full h-full p-10">
          <img
            className="w-full h-full object-cover"
            src={reseda13}
            alt={reseda13}
          />
        </div>
      </div>
      <div className="flex p-10 justify-center items-center">
        <img
          className="w-96 h-full object-cover"
          src={reseda15}
          alt={reseda15}
        />
      </div>
    </div>
  );
}
