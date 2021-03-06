import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import close from '@fortawesome/fontawesome-free-solid/faWindowClose';

import './SaleModal.scss';

class SaleModal extends Component {

    state = {
        phone: '',
        display: 'none'
    }
    handleForm = (e) => {
        const { phone } = this.state;
        e.preventDefault()

        console.log('позвоните мне ' + phone)

        this.props.closeModal()
    }

    componentWillReceiveProps = (nextProps, nextState) => {

        if (nextProps.display !== this.state.display) {
            this.setState({ display: nextProps.display })
        }
    }

    render() {
        const { phone, display } = this.state;
        const { className, bonus, message, text} = this.props;
        return (
            // className - "modal-sale1" or "modal-sale2" or "modal-sale3" or "modal-sale4"
            <div className={`modal-sale ${className}`} style={{ display: display }}>
                <div className="modal-sale__body">
                    <div className="close__modal" onClick={() => this.props.closeSaleModal()}>
                        <FontAwesomeIcon icon={close} />
                    </div>
                    <div className="modal-sale__top">
                        <span className="percent">{bonus}</span>
                        <span className="top-text">
                            {message}
				        </span>
                    </div>
                    <p>
                        {text}
			        </p>
                    <form  onSubmit={this.handleForm}>
   
                            <input type="text"
                                name=""
                                id="form-phone"
                                placeholder="Ваш телефон"
                                required
                                value={phone}
                                onChange={(e) => this.setState({ phone: e.target.value })} />
     
                        <button type="submit" >Заказать звонок</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SaleModal