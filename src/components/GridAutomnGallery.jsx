import reseda9 from "/reseda (9).jpeg";
import reseda17 from "/reseda (17).jpeg";
import reseda4 from "/reseda (4).jpeg";
import reseda18 from "/reseda (18).jpeg";

export default function GridAutomnGallery() {
  return (
    <div className="gallery of collection AUTOMNE">
      <div className="grid p-10 grid-cols-5 grid-rows-9 gap-4">
        <div className="col-start-1 row-start-1 col-end-5 row-span-3 ">
          <img
            src={reseda9}
            alt={reseda9}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-start-5 row-start-4 col-end-5 row-span-6  ">
          <img
            src={reseda17}
            alt={reseda17}
            className="w-full h-1/2 object-cover"
          />
        </div>
        <div className="col-start-1 row-start-7 col-end-3 row-span-5 ">
          <img
            className="w-full h-full object-cover"
            src={reseda4}
            alt={reseda4}
          />
        </div>
        <div className="col-start-3 row-start-7 col-end-5 row-span-5 ">
          <img
            className="w-full h-full object-cover"
            src={reseda18}
            alt={reseda18}
          />
        </div>
      </div>
    </div>
  );
}
