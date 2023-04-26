import React from 'react';
import { Button } from '@material-ui/core';
import { Dialog }from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { TextField } from '@material-ui/core';

export default function EditCar(props) {

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: '', price: ''
    })

    const handleClickOpen = () => {
        setCar({brand: props.car.brand, model: props.car.model, color: props.car.color,
             fuel: props.car.fuel, year: props.car.year, price: props.car.price})
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleInputChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const updateCar = () => {
        props.updateCar(car, props.car._links.car.href)
        handleClose()
    }
    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Car</DialogTitle>
                <DialogContent>
                    <TextField
                    autoFocus
                    margin="dense"
                    name="brand"
                    value={car.brand}
                    onChange={e => handleInputChange(e)}
                    label="Brand"
                    fullWidth
                    />
                    <TextField
                    margin="dense"
                    name="model"
                    value={car.model}
                    onChange={e => handleInputChange(e)}
                    label="Model"
                    fullWidth
                    />
                    <TextField
                    margin="dense"
                    name="color"
                    value={car.color}
                    onChange={e => handleInputChange(e)}
                    label="Color"
                    fullWidth
                    />
                    <TextField
                    margin="dense"
                    name="year"
                    value={car.year}
                    onChange={e => handleInputChange(e)}
                    label="Year"
                    fullWidth
                    />
                    <TextField
                    margin="dense"
                    name="fuel"
                    value={car.fuel}
                    onChange={e => handleInputChange(e)}
                    label="Fuel"
                    fullWidth
                    />
                    <TextField
                    margin="dense"
                    name="price"
                    value={car.price}
                    onChange={e => handleInputChange(e)}
                    label="Price"
                    fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={updateCar} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
