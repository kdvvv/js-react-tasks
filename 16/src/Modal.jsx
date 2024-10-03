import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
class Modal extends React.Component {
    render() {
        const { isOpen, children } = this.props;

        return (
            <div className={`modal${isOpen ? ' fade show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.Header = ({ toggle, children }) => (
    <div className="modal-header">
        <h5 className="modal-title">{children}</h5>
        <button type="button" className="btn-close" onClick={toggle} aria-label="Close"></button>
    </div>
);

Modal.Body = ({ children }) => (
    <div className="modal-body">
        {children}
    </div>
);

Modal.Footer = ({ children }) => (
    <div className="modal-footer">
        {children}
    </div>
);

export default Modal;
// END
