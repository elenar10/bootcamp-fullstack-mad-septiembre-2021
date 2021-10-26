
//padre que contiene una card y un button. Cuando hacemos onClick en el button la card gira
class Index extends React.Component{
    //el padre necesita un constructor porque contiene el botón que hace cambiar el estado de la card
    constructor(){
        super()
        this.state = {
            flip: 'flipHorizontal',        
        }
    }
    //creamos una función que cambie el estado con un operador ternario
    transform(){
        this.setState(oldState =>{
            return{
                flip: oldState.flip === 'flipHorizontal' ? 'flipVertical' : 'flipHorizontal'
            }
            })
    }

    render() {
        return (
            <React.Fragment>
            <button onClick={() => this.transform()}>Girar</button>
            <Card juan={this.state.flip} ></Card>
            </React.Fragment>
        )
        
    }
}
ReactDOM.render(
    <Index />,
    document.getElementById('container-react-card')
);