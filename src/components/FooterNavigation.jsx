import LinkList from "../reusable ui/LinkList";
import { navigation } from "../utils/navigation";

export default function FooterNavigation() {
  return (
    <div className="flex-1 ml-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="font-humane">
          <h3 className="text-sm font-extrabold leading-6 text-white">
            PLAN DU SITE
          </h3>
          <LinkList links={navigation.linkToPage} />
        </div>
        <div className="font-humane">
          <h3 className="text-sm font-semibold leading-6 text-white">
            NOUS SUIVRE
          </h3>
          <LinkList links={navigation.socialMedia} />
        </div>
      </div>
    </div>
  );
}
