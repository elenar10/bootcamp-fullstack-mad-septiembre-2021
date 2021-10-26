

class ContadorHijo extends React.Component {
  constructor(props){
      super(props);
  }

render () {
    // Cuando el return va en una sola línea no necesita paréntesis
    //pepito es el nombre del props que está definido en el padre
    return <h1>Has pulsado el botón: {this.props.pepito}</h1>
}
}