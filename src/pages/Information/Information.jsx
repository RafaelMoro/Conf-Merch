import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form"

import { addBuyer } from '@actions/products/products.actions'
import {Countries} from '@components/Countries'
import { StatesCountry } from '@components/StatesCountry'
import {Cities} from '@components/Cities'
import {InputForm} from '@components/InputForm'
import {ErrorMessage} from '@components/ErrorMessage'

import { getCountries } from '@utils/getAddress'
import {generateRandomNumber} from '@utils/generateRandomNumber'
import { optionsValidation } from './optionsFormValidation'
import '@styles/pages/Information.scss'

const Information = () => {
    const dispatch = useDispatch()
    const confMerch = useSelector(state => state.confMerch)
    const { cart, totalPayment} = confMerch
    const countries = getCountries()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [addressNotSelected, setAddressNotSelected] = React.useState({
        country: false,
        countryState: false,
        city: false
    })

    const [address, setAddress] = React.useState({
        countrySelected: ['Country Code', 'Country Name'],
        statesCountry: ['No Country Selected'],
        stateCountrySelected: ['Country State Code', 'Country State Name'],
        cities: ['No State Selected'],
        citySelected: ''
    })

    const saveInformation = (customerData) => {
        const numberErrors = Object.keys(errors).length
        const customerInformation = {
            ...customerData,
            country: address.countrySelected[1],
            countryState: address.stateCountrySelected[1],
            city: address.citySelected
        }

        if(numberErrors < 1) {
            //If there are no errors in the input validation, check if a country has been selected
            if(customerInformation.country === "Country Name") {
                setAddressNotSelected({ ...addressNotSelected, country: true})
            }else if((customerInformation.countryState === "Country State Name")&&(address.statesCountry.length > 1)) {
                //Check if a country state was selected in a country that has states
                setAddressNotSelected({ 
                    ...addressNotSelected, 
                    country: false,
                    countryState: true
                })
            }else if((customerInformation.city === '')&&(address.statesCountry.length > 1)) {
                //Check if a city was selected in a country that has states
                setAddressNotSelected({ 
                    country: false,
                    countryState: false,
                    city: true
                })
            }else {
                //Country, state and city were selected
                setAddressNotSelected({ 
                    country: false,
                    countryState: false,
                    city: false
                })
                if(address.statesCountry.length < 1 || address.cities.length < 1) {
                    //If there are no country states and cities available, update the data
                    const updatedData = {
                        ...customerInformation,
                        countryState: "No states available for this country",
                        city: "No city available for this country"
                    }
                    dispatch(addBuyer(updatedData))
                }else {
                    dispatch(addBuyer(customerInformation))
                }
                navigate('/checkout/payment')
            }
        }
    }

    if(cart.length > 0) {
        return (
            <main className='information'>
                <h1 className='information__title'>Información de contacto: </h1>
                <form className='form' onSubmit={handleSubmit(saveInformation)}>
                    <InputForm
                        type="text"
                        placeholder="Nombre Completo"
                        register={register}
                        options={optionsValidation.name}
                        inputName="name"
                    />
                    {errors?.name && <ErrorMessage message={errors?.name?.message} cssClass="message--form"/>}

                    <InputForm
                        type="email"
                        placeholder="Correo electrónico"
                        register={register}
                        options={optionsValidation.email}
                        inputName="email"
                    />
                    {errors?.email && <ErrorMessage message={errors?.email?.message} cssClass="message--form"/>}

                    <InputForm
                        type="number"
                        placeholder="Teléfono"
                        register={register}
                        options={optionsValidation.phone}
                        inputName="phone"
                    />
                    {errors?.phone && <ErrorMessage message={errors?.phone?.message} cssClass="message--form"/>}

                    <InputForm
                        type="text"
                        placeholder="Dirección"
                        register={register}
                        options={optionsValidation.address}
                        inputName="address"
                    />
                    {errors?.address && <ErrorMessage message={errors?.address?.message} cssClass="message--form"/>}

                    <InputForm
                        type="text"
                        placeholder="Apartamento"
                        register={register}
                        options={optionsValidation.apartment}
                        inputName="apartment"
                    />
                    {errors?.apartment && <ErrorMessage message={errors?.apartment?.message} cssClass="message--form"/>}

                    <InputForm
                        type="number"
                        placeholder="Código Postal"
                        register={register}
                        options={optionsValidation.postalCode}
                        inputName="postalCode"
                    />
                    {errors?.postalCode && <ErrorMessage message={errors?.postalCode?.message} cssClass="message--form"/>}

                    <Countries countries={countries} setAddress={setAddress} address={address}
                        showCountries={
                            (country) => (<option key={country.isoCode} value={country.isoCode}>{country.name}</option>)
                        }
                    />
                    {addressNotSelected.country && <ErrorMessage message="Seleccione un país" cssClass="message--form" />}

                    <StatesCountry address={address} setAddress={setAddress}
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
                    {addressNotSelected.countryState && <ErrorMessage message="Seleccione un estado" cssClass="message--form" />}

                    <Cities address={address} setAddress={setAddress}
                        noCitiesAvailable={() => <p className="form__countrystate--not-found">No hay ciudades disponibles para este país.</p>}
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
                    {addressNotSelected.city && <ErrorMessage message="Selecciona una ciudad" cssClass="message--form" />}

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