import { Dot } from "lucide-react";
import Footer from "./Footer";

export default function Offer() {
  const offerData = [
    {
      id: 1,
      title: "PACK STANDARD",
      image: "/reseda (11).jpeg",
      packList: [
        "Séance de 30 minutes",
        "Étalonnage colorimétrique et retouche",
        "Une galerie privée en ligne contenant au moins 5 images numériques disponibles 2 à 3 semaines après la séance",
        "Idéal pour les visites de clients, les portfolios en ligne et la présence professionnelle sur les réseaux sociaux",
      ],
      price: "180€",
    },
    {
      id: 2,
      title: "PACK DELUXE",
      image: "/reseda (12).jpeg",
      packList: [
        "Séance de 2 heures",
        "1 ou 2 changements de vêtements",
        "Étalonnage colorimétrique et retouche",
        "Une galerie privée en ligne contenant au moins 18 images numériques disponibles 3 à 5 semaines après la séance",
        "Idéal pour les visites de clients, les portfolios en ligne, les réseaux sociaux et les événements spéciaux comme les anniversaires",
      ],
      price: "250€",
    },
    {
      id: 3,
      title: "PACK PROFESSIONNEL",
      image: "/reseda (10).jpeg",
      packList: [
        "Séance de 3 heures",
        "3 changements de vêtements",
        "Étalonnage colorimétrique et retouche",
        "Plusieurs modèles",
        "Une galerie privée en ligne contenant au moins 24 images numériques disponibles 4 à 6 semaines après la séance",
        "Idéal pour les agences indépendantes et les campagnes d’impression",
      ],
      price: "300€",
    },
    {
      id: 3,
      title: "PACK PROFESSIONNEL",
      image: "/reseda (19).jpg",
      packList: [
        "Séance de 3 heures",
        "Changements de vêtements illimités",
        "Étalonnage colorimétrique et retouche",
        "Plusieurs modèles",
        "Une galerie privée en ligne contenant au moins 36 images numériques disponibles 6 à 8 semaines après la séance",
        "Idéal pour les agences et les clients du secteur",
      ],
      price: "500€",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="flex w-full flex-col">
        {offerData.map((offer) => (
          <div key={offer.id} className="flex  justify-between p-10 ">
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-5xl font-humane font-extrabold tracking-tighter">
                  {offer.title}
                </h1>
              </div>
              <div className="font-mono">
                <p>Le pack inclut :</p>
                <ul className="flex w-96 flex-col p-6">
                  {offer.packList.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex">
                      <Dot />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="btn  btn-primary font-humane">
                  {offer.price} | Acheter le pack
                </button>
              </div>
            </div>
            <img
              src={offer.image}
              className="max-w-sm rounded-lg shadow-2xl"
              alt={offer.title}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
