import { useEffect } from "react";
import { Alert } from "react-bootstrap";

const AlertComponent = ({ msg, style, showAlert, setShowAlert, icon }) => {
    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 5000);

            return () => clearTimeout(timer)
        }
    }, [showAlert, setShowAlert]);

    return (
        <>
            {showAlert && (
                <Alert style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: '1050'}} variant={style} className="fade show">
                    <i className={'bi bi-' + icon}></i> {msg}
                </Alert>
            )}
        </>
    );
}

export default AlertComponent;
