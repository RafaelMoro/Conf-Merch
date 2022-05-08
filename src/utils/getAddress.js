import { Country, State, City }  from 'country-state-city'

const getCountries = () => {
    return Country.getAllCountries()
}
const getStates = (isoCode) => {
    return State.getStatesOfCountry(isoCode)
}
const getCities = (countryCode, stateCode) => {
    return City.getCitiesOfState(countryCode, stateCode)
}
const getCitiesOfCountry = (countryCode) => {
    return City.getCitiesOfCountry(countryCode)
}
export {getCountries, getStates, getCities, getCitiesOfCountry}