import './ExibirPerfil.css'
function ExibePerfil(props){
    return(
      <div>
           <img src={props.img} alt={props.nome} className='icon0'/> 
           <h3>Nome:{props.nome}</h3>
           <p>Cracteristicas:{props.caracteristicas}</p>
      </div>
    )

}
export default ExibePerfil;