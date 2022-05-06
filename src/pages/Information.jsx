import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../hooks/stateContext'
import {Countries} from '@components/Countries'
import { StatesCountry } from '@components/StatesCountry'
import {Cities} from '@components/Cities'
import { getCountries } from '@utils/getAddress'
import {generateRandomNumber} from '@utils/generateRandomNumber'
import '@styles/pages/Information.scss'

const Information = () => {
    const countries = getCountries()
    const {state: {cart, totalPayment}, addBuyer} = React.useContext(Context)
    const form = React.useRef(null)
    const navigate = useNavigate()

    const [address, setAddress] = React.useState({
        countrySelected: ['Country Code', 'Country Name'],
        statesCountry: ['No Country Selected'],
        stateCountrySelected: ['Country State Code', 'Country State Name'],
        cities: ['No State Selected'],
        citySelected: ''
    })

    const handleSubmit = () => {
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': address.citySelected,
            'country': address.countrySelected[1],
            'state': address.stateCountrySelected[1],
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        }
        addBuyer(buyer)
        navigate('/checkout/payment')
    }

    if((cart)&&(cart.length > 0)) {
        return (
            <main className='information'>
                <h1 className='information__title'>Información de contacto: </h1>
                <form className='form' ref={form}>
                    <input className='input' type="text" placeholder="Nombre Completo" name="name" />
                    <input className='input' type="email" placeholder="Correo electrónico" name="email" />
                    <input className='input' type="number" placeholder="Teléfono" name="phone" />
                    <input className='input' type="text" placeholder="Dirección" name="address" />
                    <input className='input' type="text" placeholder="Apartamento" name="apto" />

                    <Countries countries={countries} setAddress={setAddress} address={address}
                        showCountries={
                            (country) => (<option key={country.isoCode} value={country.isoCode}>{country.name}</option>)
                        }
                    />
                    <StatesCountry address={address} setAddress={setAddress}
                        noStatesAvailable={() => <p>No hay estados disponibles para este país.</p>}
                        showStates={
                            (stateOfCountry) => {
                                const randomNumber = generateRandomNumber()
                                return(
                                    <option key={`${stateOfCountry.isoCode}${randomNumber}`} value={stateOfCountry.isoCode}>
                                        {stateOfCountry.name}
                                    </option>
                                )
                            }
                        }
                    />
                    <Cities address={address} setAddress={setAddress}
                        showCities={
                            (city) => {
                                const randomNumber = generateRandomNumber()
                                return(
                                    <option key={`${city.countryCode}${city.stateCode}${randomNumber}`} value={city.name}>
                                        {city.name}
                                    </option>
                                )
                            }
                        }
                    />
                    <input className='input' type="text" placeholder="Código Postal" name="cp" />
                </form>
                <aside className='information--payment'>
                    <p>Total a pagar: <span>${totalPayment} USD</span> </p>
                </aside>
                <div className='information__buttons'>
                    <Link to="/checkout"><button className='button--cancel'>Regresar</button></Link>
                    <button className='button--proceed' onClick={handleSubmit}>Pagar</button>
                </div>
            </main>
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