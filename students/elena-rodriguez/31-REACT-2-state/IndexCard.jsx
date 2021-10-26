
//vamos a crear una variante avanzada del ejercicio girar cards para incluir otras posiciones diferentes, solucionándolo con un array. De este modo si tuviéramos que introducir más posibles movimientos podríamos añadirlos simplemente al array rotationCard


class IndexCard extends React.Component{
    //el padre necesita un constructor porque contiene el botón que hace cambiar el estado de la card
    constructor(){
        super()
        //creamos un array con los posibles movimientos
        this.rotationCard = ['flipHorizontal', 'flipVertical', 'flipGiro']
        this.state = {
            //en el valor del efecto flip incluimos el array inicializándolo en su primer elemento
            flip: this.rotationCard[0],  
            //creamos otro elemento que dará un valor a la posición de salida      
            currentPosition: 0
        }
    }
    //creamos la función transformar que cambie el estado
    transform(){
        this.setState(oldState =>{
            //creamos una constante que incremente la posición de salida. ESTA PARTE NO TERMINO DE ENTENDERLA
            const NEXTPOSITION = (oldState.currentPosition +1) % this.rotationCard.length;
            return{
                //retornará un flip que toma como valor el array con las distintas posiciones actualizadas mediante
                flip: this.rotationCard[NEXTPOSITION],
                currentPosition: NEXTPOSITION
            }
            })
    }

    render() {
        return (
            <React.Fragment>
            <button onClick={() => this.transform()}>ROTACIONES</button>
            <Card juan={this.state.flip} ></Card>
            </React.Fragment>
        )
        
    }
}
ReactDOM.render(
    <IndexCard />,
    document.getElementById('container-react-card-2')
);