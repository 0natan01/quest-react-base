import './styles.css'


const Paragrafo = (props) => {
    return (
        <p className="paragrafo" style={{color:props.color}}>{props.text.toUpperCase()}</p>
    )
}

Paragrafo.defaultProps = {
    text: 'Barcelona will be the champions league winner'
}

export default Paragrafo