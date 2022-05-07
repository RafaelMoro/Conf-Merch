import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"

import { Context } from '../../hooks/stateContext'
import {Countries} from '@components/Countries'
import { StatesCountry } from '@components/StatesCountry'
import {Cities} from '@components/Cities'
import { getCountries } from '@utils/getAddress'
import {generateRandomNumber} from '@utils/generateRandomNumber'
import '@styles/pages/Information.scss'

const Information = () => {
    const countries = getCountries()
    const {state: {cart, totalPayment}, addBuyer} = React.useContext(Context)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [address, setAddress] = React.useState({
        countrySelected: ['Country Code', 'Country Name'],
        statesCountry: ['No Country Selected'],
        stateCountrySelected: ['Country State Code', 'Country State Name'],
        cities: ['No State Selected'],
        citySelected: ''
    })

    const saveInformation = (customerData) => {
        const customerInformation = {
            ...customerData,
            country: address.countrySelected[1],
            countryState: address.stateCountrySelected[1],
            city: address.citySelected
        }
        //const formData = new FormData(form.current)
        // const buyer = {
        //     'name': formData.get('name'),
        //     'email': formData.get('email'),
        //     'address': formData.get('address'),
        //     'apartment': formData.get('apartment'),
        //     'country': address.countrySelected[1],
        //     'countryState': address.stateCountrySelected[1],
        //     'city': address.citySelected,
        //     'postalCode': formData.get('postalCode'),
        //     'phone': formData.get('phone'),
        // }
        addBuyer(customerInformation)
        //navigate('/checkout/payment')
    }

    if((cart)&&(cart.length > 0)) {
        return (
            <main className='information'>
                <h1 className='information__title'>Información de contacto: </h1>
                <form className='form' onSubmit={handleSubmit(saveInformation)}>
                    <input className="input" type="text" placeholder="Nombre Completo" {...register("name")} />
                    <input className="input" type="email" placeholder="Correo electrónico" {...register("email")}  />
                    <input className="input" type="number" placeholder="Teléfono" {...register("phone")}/>
                    <input className="input" type="text" placeholder="Dirección" {...register("address")} />
                    <input className="input" type="text" placeholder="Apartamento" {...register("apartment")} />

                    <Countries countries={countries} setAddress={setAddress} address={address} register={register}
                        showCountries={
                            (country) => (<option key={country.isoCode} value={country.isoCode}>{country.name}</option>)
                        }
                    />
                    <StatesCountry address={address} setAddress={setAddress} register={register}
                        noStatesAvailable={() => <p className="form__countrystate--not-found">No hay estados disponibles para este país.</p>}
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
                    <Cities address={address} setAddress={setAddress} register={register}
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
                    <input className="input" type="text" placeholder="Código Postal" {...register("postalCode")} />
                    <aside className="information--payment">
                        <p>Total a pagar: <span>${totalPayment} USD</span> </p>
                    </aside>
                    <div className="information__buttons">
                        <Link to="/checkout"><button className="button--cancel">Regresar</button></Link>
                        <button className="button--proceed" type="submit">Pagar</button>
                    </div>
                </form>
                
            </main>
        )
    } else {
        return (
            <article className="checkout--empty">
                <h1>No tienes articulos en tu carrito</h1>
            </article>
        )
    }
}

export {Information}