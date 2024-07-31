import Introduction from "./Introduction";
import WinterCollection from "./WinterCollection";
import AutomnCollection from "./AutomnCollection";
import NatureMorteCollection from "./NatureMorteCollection";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Introduction />
      <WinterCollection />
      <AutomnCollection />
      <NatureMorteCollection />
    </div>
  );
}
