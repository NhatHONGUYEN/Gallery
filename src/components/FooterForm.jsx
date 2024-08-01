export default function FooterForm() {
  return (
    <div className="flex-1">
      <h3 className="text-sm font-semibold leading-6 text-white">S’abonner</h3>
      <p className="mt-2 text-sm leading-6 text-gray-300">
        Inscrivez-vous avec votre adresse e-mail afin de recevoir les actualités
        et les mises à jour.
      </p>
      <form className="mt-6 sm:flex sm:max-w-md">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email-address"
          type="email"
          required
          placeholder="Entrer votre adresse e-mail"
          autoComplete="email"
          className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}
