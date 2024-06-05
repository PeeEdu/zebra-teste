'use client'
import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { decodeCrypto } from '../services/decryption';
import styles from '../style/dropdown.module.css';

type CitiesProps = {
    cities?: { id: number, name: string }[];  
};

export default function InputStates({ cities }: CitiesProps) { 
    const orderedCities = cities?.sort((a, b) => {
    const citya = decodeCrypto(a.name)?.toUpperCase();
    const cityb = decodeCrypto(b.name)?.toUpperCase();
    return citya?.localeCompare(cityb); 
});

const options = orderedCities?.map((city: { name: string; id: number; }) => ({
    label: decodeCrypto(city?.name),
    value: city?.id
}));

const [selectedCity, setSelectedCity] = useState<number | null>(null);

return (
    <div className={styles.dropdownDiv}>
            <Dropdown
                placeholder='Select City'
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={options}
                editable
                className={styles.dropdownComponent}
            />
    </div>
    );
}

