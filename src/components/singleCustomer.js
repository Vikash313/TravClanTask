import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router'

const SingleCustomer = () => {
    const history = useHistory()
    const location = useLocation()
    console.log("location", location.state.hasPremium)

    const handleClick = () => {
        history.push("/")
    }

    return (
        <div>
            <h3>Single Customer Details...</h3>
            <p className="font-monospace">First Name: {location.state.firstname} </p>
            <p className="font-monospace">Last Name: {location.state.firstname} </p>
            <p className="font-monospace">Email: {location.state.email} </p>
            <p className="font-monospace">Phone: {location.state.phone} </p>
            <Button variant="contained" color="primary" onClick={handleClick}>Go Back</Button>
        </div>
    )
}

export default SingleCustomer
