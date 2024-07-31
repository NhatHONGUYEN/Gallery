import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import reseda6 from "/reseda (6).jpeg";
import GridNatureMorte from "./GridNatureMorte";

export default function NatureMorteCollection() {
  return (
    <div className="header of collection NATURES MORTES  ">
      <div className="flex justify-between w-screen h-screen">
        <div className="flex flex-col justify-between w-2/3 h-full pl-10 py-10">
          <h2 className="text-3xl uppercase font-bold font-humane tracking-tighter">
            collection NATURES MORTES
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
        </div>
        <div className="flex  w-full h-full p-10 ">
          <img className="h-full object-cover" src={reseda6} alt={reseda6} />
        </div>
      </div>
      <GridNatureMorte />
    </div>
  );
}
