import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import {Country, State, City} from 'country-state-city';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

function ThirdStep(props) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, sestCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const getCountries = async() => {
      try {
        setIsLoading(true);
        const result = await Country.getAllCountries();
        let allCountries = [];
        allCountries = result?.map(({ isoCode, name}) => ({
          isoCode,
          name
        }));
        const [{isoCode: firstCountry} = {}] = allCountries;
        setCountries(allCountries);
        setSelectedCity(firstCountry);
        setIsLoading(false);
      } catch (error) {
        setCountries([]);
        setIsLoading(false);
        console.log(error);
      }
    }
    getCountries();
  }, []);

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log('submit');
  };

  return(
    <Form className='input-form' onSubmit={handleSubmit}>
      <div className='col-md-6 offset-md-3'>
        <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              as="select"
              name="country"
              value={selectedCountry}
              onChange={(event) => setSelectedCountry(event.target.value)}
            >
              {countries.map(({isoCode, name})=> (
                <option value={isoCode} key={isoCode}>{name}</option>
              ))}
            </Form.Control>
          </Form.Group>
      </div>
    </Form>
    
  );
}

export default ThirdStep;