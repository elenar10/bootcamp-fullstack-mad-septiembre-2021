//3 Crear un componente card (reutilizar la card de ayer) que recibirá por prop una variable que indique si hará flip vertical o horizontal, implementar ambos flips dependientes de esta variable.
// 4.-Crear un componente padre que llamará a la card y tendrá un botón que al pulsar alternará entre vertical u horizontal (dependiente del estado previo) y pasará a su hijo (componente del ejercicio 3) esta variable. El hijo deberá hacer el flip indicado.


//creamos una clase Card
class Card extends React.Component {
    //le añadimos un constructor para que le pueda pasar los props(datos para que gire)
    constructor(props){
        super(props);
    }
  
    
  render () {  
      return (
          //le incluimos las distintas partes de la card.
          //En el div le añadimos dos clases por concatenación para que tenga al mismo tiempo la card y la que hemos metido como resultado del prop que reciba los props. El prop llamado juan es un atributo del componente hijo card, que está definido en el padre Index
          <div className={"card " + this.props.juan}>
              <img src="pexels-andre-furtado.jpg" className="imagen"/>
              <h2 className="textos" >Paisaje Urbano</h2>
              <p className="parrafo" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              
          </div>
      )
  }
  }
