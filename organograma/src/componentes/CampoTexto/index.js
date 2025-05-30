import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholdermodificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        console.log(props.valor)
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholdermodificada}/>
        </div>
    )
}

export default CampoTexto