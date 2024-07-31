import Introduction from "./Introduction";
import WinterCollection from "./WinterCollection";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Introduction />
      <WinterCollection />
      <div></div>
    </div>
  );
}
