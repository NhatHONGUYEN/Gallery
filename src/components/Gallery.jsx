import { pictures } from "../utils/pictures";

export default function Gallery() {
  pictures.sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {pictures.map((picture) => (
          <div key={picture.id} className="space-y-2">
            {picture.src ? (
              <img
                className="w-full h-auto object-cover"
                src={picture.src}
                alt={picture.alt}
              />
            ) : (
              <div className="h-full bg-white"></div> // This is the blank space
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
