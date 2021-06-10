import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import {AlertContext} from "../context/alert/alertContext";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext);
    const nodeRef = React.useRef(null);

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 1000,
                exit: 350,
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
            nodeRef={nodeRef}
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Внимание!</strong>
                &nbsp;{alert.text}
                <button onClick={hide} type="button" className="btn-close" aria-label="Close"></button>
            </div>
        </CSSTransition>
    )
};