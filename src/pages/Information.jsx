import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Context } from '../hooks/stateContext';
import '@styles/pages/Information.scss'

const Information = () => {
    const {state: {cart}, addBuyer} = React.useContext(Context)
    const form = React.useRef(null)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = () => {
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        }
        addBuyer(buyer)
        navigate('/checkout/payment', {state: {total: location.state}})
    }
    if((cart)&&(cart.length > 0)) {
        return (
            <div className='container'>
                <main className='information'>
                    <h1 className='information__title'>Información de contacto: </h1>
                    <form ref={form}>
                        <fieldset>
                            <legend>Información Personal: </legend>
                            <input className='form__input' type="text" placeholder="Nombre Completo" name="name" />
                            <input className='form__input' type="email" placeholder="Correo electrónico" name="email" />
                            <input className='form__input' type="number" placeholder="Teléfono" name="phone" />
                        </fieldset>
                        <fieldset>
                            <legend>Dirección</legend>
                            <input className='form__input' type="text" placeholder="Dirección" name="address" />
                            <input className='form__input' type="text" placeholder="Apartamento" name="apto" />
                            <input className='form__input' type="text" placeholder="Ciudad" name="city" />
                            <input className='form__input' type="text" placeholder="País" name="country" />
                            <input className='form__input' type="text" placeholder="Estado" name="state" />
                            <input className='form__input' type="text" placeholder="Código Postal" name="cp" />
                        </fieldset>
                    </form>
                    <div className='information__buttons'>
                        <button className='checkout__button--cancel'><Link to="/checkout">Regresar</Link></button>
                        <button className='checkout__button--pay' onClick={handleSubmit}>Pagar</button>
                    </div>
                </main>
                <aside className='information--payment'>
                    <p>Total a pagar: <span>${location.state}</span> </p>
                </aside>
            </div>
        )
    } else {
        return (
            <article className='checkout--empty'>
                <h1>No tienes articulos en tu carrito</h1>
            </article>
        )
    }
}

export {Information}