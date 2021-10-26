// 1.- Crear un componente padre que tenga un botón que sume 1 a una variable de estado cada vez que se pulse. Además este componente llamará al componente del ejercicio 2  y le pasará por props la variable de estado del padre.
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }

   
    render() {
        return (
            <React.Fragment>
                {/* this.state.counter será el valor del nuevo estado del counter. Le sumamos 1 */}
           <button onClick={() => this.setState({counter:this.state.counter+1})}>CONTADOR</button>     
             <ContadorHijo pepito={this.state.counter}></ContadorHijo> 
            </React.Fragment>
        )

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container-react-boton-contador')
);