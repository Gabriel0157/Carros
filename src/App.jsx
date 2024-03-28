import IconSedans from "./assets/icon-sedans.svg"
import IconSuvs from "./assets/icon-suvs.svg"
import IconsLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased">
      <section className="lg:flex justify-center items-center">
        <div className="bg-orange p-12 rounded-t-lg">
          <img src={IconSedans} alt="icone dos carros sedans" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">Sedans</h2>
          <p className="font-lexend mb-7 text-offwhite">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green p-12">
          <img src={IconSuvs} alt="icone dos carros Suvs" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">SUVs</h2>
          <p className="font-lexend mb-7 text-offwhite">Ecolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green" href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green p-12 rounded-b-lg">
          <img src={IconsLuxury} alt="icone dos carros de luxo"className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">Luxuosos</h2>
          <p className="font-lexend mb-7 text-offwhite">Passeie nos melhores carros os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
        </div>
      </section>
    </main>
  )
}