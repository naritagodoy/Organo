import './Campo.css'

const Campo =  ({type='text', label, aoAlterado, obrigatorio, valor, placeholder = false }) => {
   
    return (
        <div className="campo-texto">

            <label>
                {label}
            </label>

            <input type={type} value={valor} onChange={evento => aoAlterado(evento.target.value)} required = {obrigatorio} placeholder={placeholder}/>

        </div>
    )
}

export default Campo