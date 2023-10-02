export default function CardBotoes(){

    const handleClick = ({url}) => {
        window.location.href = url;
    }

    return(
        <div className="template-demo mt-2">
            <button type="button" className="btn btn-outline-secondary btn-icon-text" onClick={() => handleClick({url: '/qrcode'})}>
                QRCode
                <i className="ti-camera btn-icon-append" />                          
            </button>
            <button type="button" className="btn btn-outline-secondary btn-icon-text" onClick={() => handleClick({url: '/extrato'})}>
                Extrato
                <i className="ti-ticket btn-icon-append" />                          
            </button>
            <button type="button" className="btn btn-outline-secondary btn-icon-text"onClick={() => handleClick({url: '/lancamentos'})}>
                Lançamento
                <i className="ti-pencil-alt  btn-icon-append" />                          
            </button>
        </div>
    )
}