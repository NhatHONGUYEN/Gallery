import reseda5 from "/reseda (5).jpeg";
import reseda8 from "/reseda (8).jpeg";
import reseda7 from "/reseda (7).jpeg";

export default function GridNatureMorte() {
  return (
    <div className="GRID collection AUTOMNE ">
      <div className="grid p-10 grid-cols-6 grid-rows-3 gap-4">
        <div className="col-start-1 row-start-1 col-end-3 ">
          <img
            className="w-full h-full object-cover"
            src={reseda5}
            alt={reseda5}
          />
        </div>
        <div className="col-start-5 row-start-2 col-end-7 ">
          <img
            className="w-full h-full object-cover"
            src={reseda8}
            alt={reseda8}
          />
        </div>
        <div className="col-start-3 row-start-3 col-end-5 ">
          <img
            className="w-full h-full object-cover"
            src={reseda7}
            alt={reseda7}
          />
        </div>
      </div>
    </div>
  );
}
