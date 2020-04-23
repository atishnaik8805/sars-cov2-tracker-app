import React, { Component } from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fecthData } from './api';

import sarscov2image  from './images/corona.jpg';

class App extends Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fecthedData = await fecthData();
        this.setState({ data: fecthedData})
    }

    handleCountryChange = async (country) => {
        const fecthedData = await fecthData(country);
        this.setState({data: fecthedData, country: country});
    }
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={sarscov2image} alt="sars-cov2"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
