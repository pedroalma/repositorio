
import './Main.css';
import ExibePerfil from "../ExibePerfil/ExibirPerfil";
import icon0 from '../../icons/falcon.jpg'
import icon1 from '../../icons/falcon 9.jpg'
import icon2 from '../../icons/starship.jpg'
import icon3 from '../../icons/sls.jpg'
function Main(){
    return(
        <main>
            <ExibePerfil nome="falcon heavy" caracteristicas="Velocidade máxima: 39.600 km/h Custo: 90 milhões USD (2018) Fabricante: SpaceX Altura: 70 m Função: Lançador orbital"  img={icon0}/>
            <ExibePerfil nome="falcon 9 " caracteristicas="Altura: FT: 70 m (230 ft) v1.1: 68.4 m (224 ft) v1.0: 54.9 m (180 ft) Custo por lançamento (2023): $62M (2016), $50M (2018) Diâmetro: 3.7 m (12 ft) Estágios: 2 Função: Veículo de lançamento orbital Lançamentos totais: 111 Massa: v1.1: 505846 kg; v1.0:333400 kg"  img={icon1}/>
            <ExibePerfil nome="starship" caracteristicas="Altura: 122 metro, 400 pé Fabricante: SpaceX Função: voo suborbital, voo orbital, viagem interplanetária Locais de lançamento: Starbase Launch Site, Kennedy Space Center Launch Complex 39A Massa: 5 000 tonelada, 11 000 000 libra" img={icon2}/>   
            <ExibePerfil nome="VLS-1" caracteristicas="Altura: 19,7 m Carga útil para LEO: 380 kg (órbita de 750 km) Estágios: 4 Função: Lançador de satélites Lançamentos totais: 2 Locais de lançamento: Alcântara Massa: 50 000 kg" img={icon3}/>
        </main>

    )
}
export default Main;