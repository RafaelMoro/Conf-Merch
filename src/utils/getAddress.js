import { Country, State, City }  from 'country-state-city'

const getCountries = () => {
    return Country.getAllCountries()
}
const getStates = (isoCode) => {
    return State.getStatesOfCountry(isoCode)
}
export {getCountries, getStates}