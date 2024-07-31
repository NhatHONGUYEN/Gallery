export default function Informations() {
  return (
    <section className="h-screen w-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="../../public/reseda (2).jpeg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24 w-4/5">
            <h2 className="text-3xl font-bold sm:text-4xl">
              À PROPOS DE SOFIA
            </h2>

            <p className="mt-4 text-gray-600">
              Basée à Los Angeles, Sofia Parazi est photographe, directrice
              artistique et cinéaste. Son enfance dans le sud de l’Italie a
              conduit Sofia Parazi à vouloir passer autant de temps que possible
              à l’extérieur. Pour ses photos, Sofia utilise la lumière naturelle
              qui lui rappelle son enfance baignée de soleil.​ Sofia habite à
              Los Angeles. Pour toute demande d’informations, n’hésitez pas à la
              contacter.
            </p>
            <form>
              <div className="flex">
                <div className="flex flex-col">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="first name"
                    className="input input-bordered w-full max-w-xs"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="last name"
                    className="input input-bordered w-full max-w-xs"
                    required
                  />
                </div>
              </div>

              <label className="label">
                <span className="label-text">E-mail</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full max-w-xs"
                required
              />

              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="message"
                required
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
