import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import reseda16 from "/reseda (16).jpeg";
import GridAutomnGallery from "./GridAutomnGallery";

export default function AutomnCollection() {
  return (
    <div className="border-b border-gray-800">
      <div className="header of collection AUTOMNE ">
        <div className="flex justify-between w-screen h-screen">
          <div className="flex flex-col justify-between w-1/3 h-full pl-10 py-10">
            <h2 className="text-3xl uppercase font-bold font-humane tracking-tighter">
              Collection hiver
            </h2>
            <div>
              <p className="font-mono text-sm">
                Les photos sont des métaphores. L’abstrait devient concret et
                l’ordinaire devient déroutant. Faites preuve de clarté et
                d’assurance, et n’y réfléchissez pas trop. La beauté de votre
                histoire, c’est qu’elle va continuer à évoluer et que votre site
                peut évoluer avec elle. Votre objectif, c’est qu’il soit le
                reflet du moment présent. La suite s’écrira d’elle-même.
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
          </div>
          <div className="flex justify-end w-2/3 h-full p-10 ">
            <img
              className="w-1/3 h-full object-cover"
              src={reseda16}
              alt={reseda16}
            />
          </div>
        </div>
      </div>

      <GridAutomnGallery />
    </div>
  );
}
