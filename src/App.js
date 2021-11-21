import React, { useEffect, useState } from 'react'

import { Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import covid from './images/covid.png'

const App = () => {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('')

    useEffect(() => {
        async function fetchingData() {
            const fetchedData = await fetchData()
            setData(fetchedData)
        }
        fetchingData()
    }, [])

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        setData(fetchedData)
        setCountry(country)
    }

    return (
        <div className={styles.container}>
            <img className={styles.image} src={covid} alt="covid-image" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Charts data={data} country={country} />
        </div>
    )
}

export default App
