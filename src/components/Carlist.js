import React, { useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Button } from '@mui/material';
import AddCar from './Addcar';
import EditCar from './Editcar';

export default function Carlist() {

    const  [cars, setCars] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://carrestapi.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err))
    }

    const deleteCar = (link) => {
        if (window.confirm('Are you sure?')) {
        fetch(link, {method: 'DELETE'})
        .then (res => fetchData())
        .catch(err => console.error(err))
        }
    }

    const saveCar = (car) => {
        fetch('https://carrestapi.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const updateCar = (car, link) => {
        fetch(link, {           
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'Brand',
            accessor: 'brand'
        },
        {
            Header: 'Model',
            accessor: 'model'
        },
        {
            Header: 'Color',
            accessor: 'color'
        },
        {
            Header: 'Fuel',
            accessor: 'fuel'
        },
        {
            Header: 'Year',
            accessor: 'year'
        },
        {
            Header: 'Price',
            accessor: 'price'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <EditCar updateCar={updateCar} car={row.original} />
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: '_links.self.href',
            Cell: ({value}) => <Button color="warning" size="small" onClick={() => deleteCar(value)}>Delete</Button>
        }
    ]
    return (
        <div>
            <AddCar saveCar={saveCar}/>
            <ReactTable filterable={true} data={cars} columns={columns} />
        </div>
    );
}

