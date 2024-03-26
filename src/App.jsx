import IconSedans from "./assets/icon-sedans.svg"
import IconSuvs from "./assets/icon-suvs.svg"
import IconsLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main>
      <section>
        <div>
          <img src={IconSedans} alt="icone dos carros sedans" />
          <h2>Sedans</h2>
          <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem</p>
          <a href="https://www.webmotors.com.br/sedans" target="_blank>Ver mais</a>
        </div>

        <div>
          <img src={IconSuvs} alt="icone dos carros Suvs" />
          <h2>SUVs</h2>
          <p>Ecolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road</p>
          <a href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais</a>
        </div>

        <div>
          <img src={IconsLuxury} alt="icone dos carros de luxo" />
          <h2>Luxuosos</h2>
          <p>Passeie nos melhores carros os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank>Ver mais</a>
        </div>
      </section>
    </main>
  )
}