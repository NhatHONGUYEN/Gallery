import FooterCompanyName from "../utils/FooterCompanyName";
import FooterForm from "./FooterForm";
import FooterNavigation from "./FooterNavigation";

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="flex justify-between">
          <FooterForm />
          <FooterNavigation />
        </div>
        <FooterCompanyName />
      </div>
    </footer>
  );
}
