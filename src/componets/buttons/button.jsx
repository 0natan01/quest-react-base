import './button.css'

const enviarMensagem = () => {
    alert("Flamengo vai ser campeao da copa do brasil")
}

const Button = (props) => {
    return (
        <div>
            <button className='btn' onClick={enviarMensagem}>{props.label}</button> 
        </div>
 
    )
}

Button.defaultProps =  {
    label: "Baixar arquivo"
}

export default Button