import { useState } from "react";

const Payment = () => {

    const initialPayment = {
        saad : false,
        evc : false,
        sahal : false
    }

    const [paymentMethod, setPaymentMethod] =useState(initialPayment);

    return(
        <div>
            <h2>Pay with</h2>
            <div className={`payment-cards ${paymentMethod.saad && "selected"}`} onClick={() => setPaymentMethod({...initialPayment, saad: true})}>
                <div className="payment-card">
                    <h3>Saad Service</h3>
                </div>
            </div>
            <div className={`payment-cards ${paymentMethod.evc && "selected"}`} onClick={() => setPaymentMethod({...initialPayment, evc: true})}>
                <div className="payment-card">
                    <h3>Evc Plus</h3>
                </div>
            </div>
            <div className={`payment-cards ${paymentMethod.sahal && "selected"}`} onClick={() => setPaymentMethod({...initialPayment, sahal: true})}>
                <div className="payment-card">
                    <h3>Sahal</h3>
                </div>
            </div>

            <form action="">
                <input type="text" className="form-control" placeholder="+252....." />
                <button className="btn-proceed">proceed</button>
            </form>
        </div>
    )
}

export default Payment;