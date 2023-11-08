import countries from 'world-countries'



const formattedCountries  = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    region: country.region
}))
import React from 'react'

const useCountries = () => {
    const getAll = () => formattedCountries

    const getByValue = (value : string) => {
        return formattedCountries.find((item) => item.value === value)
    }

    return {
        getAll,
        getByValue
    }
}
export default useCountries