import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import coupleIntro from "/reseda (1).jpeg";

export default function Introduction() {
  return (
    <div className=" border-b border-gray-800">
      <h1 className="text-[200px] mx-8  font-humane font-extrabold">RESEDA</h1>
      <div className="flex flex-col md:flex-row  h-screen  p-10">
        {/* Left Section - Image */}

        <div className="w-full h-full  ">
          <img
            className="object-cover h-full w-full"
            src={coupleIntro}
            alt={coupleIntro}
          />
        </div>

        {/* Right Section - Text */}

        <div className="w-full lg:w-1/2 flex flex-col px-10 justify-between ">
          <div>
            <h2 className="text-3xl font-bold  font-humane tracking-tighter">
              PHOTOGRAPHIE À LOS ANGELES PAR SOFIA PARAZI
            </h2>
          </div>
          <div>
            <p className="font-mono text-sm pb-20">
              Basée à Los Angeles, Sofia Parazi est photographe, directrice de
              la photographie et directrice artistique. Son jeu avec la lumière
              et les ombres définit son style unique. Pour Sofia, les photos
              sont des métaphores. L’abstrait devient concret et l’ordinaire
              devient déroutant.
            </p>

            <Link
              to={"/informations"}
              className="font-mono gap-2 underline flex"
            >
              <MoveRight size={20} strokeWidth={0.75} /> À propos de Sofia
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
