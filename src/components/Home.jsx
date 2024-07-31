import { Link } from "react-router-dom";
import Introduction from "./Introduction";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Introduction />
      <div className="collection-hiver ">
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
                peut évoluer avec elle. Votre objectif, c’est qu’il soit le
                reflet du moment présent. La suite s’écrira d’elle-même.
              </p>
              <div className="py-10">
                <Link
                  to={"/gallery"}
                  className="font-mono text-sm gap-2 underline flex"
                >
                  <MoveRight size={20} strokeWidth={0.75} /> Afficher la galerie
                  complète
                </Link>
              </div>
              <img src="/reseda (14).jpeg" alt="" />
            </div>
          </div>
          <div
            className="flex flex-col w-full
           h-full p-10"
          >
            <img
              className="w-full h-full object-cover"
              src="./reseda (13).jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-96 h-full object-cover"
            src="../../public/reseda (15).jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
