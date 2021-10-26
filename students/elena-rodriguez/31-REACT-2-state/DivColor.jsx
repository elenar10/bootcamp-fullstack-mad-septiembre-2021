

class DivColor extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'divRojo',
        }
    }


    upColorDiv() {
        this.setState(oldState => {
            return {
                color: oldState.color === 'divRojo' ? 'divVerde' : 'divRojo'
            }
        })
    }


    render () {
        return (
            <React.Fragment>
                <div className= {`contenedor ${this.state.color}`}></div>
                <button onClick= {( )=> this.upColorDiv()}>Cambio de color</button>
            </React.Fragment>
        )
    }
}