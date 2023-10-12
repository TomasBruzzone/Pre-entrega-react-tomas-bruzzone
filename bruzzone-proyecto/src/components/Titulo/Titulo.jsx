import App from "../../App"

const Titulo = (props)=>{
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subTitulo}</h3>
            <p>{props.parrafo}</p>
        </div>
    )
}

export default Titulo