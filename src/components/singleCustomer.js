import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router'

const SingleCustomer = () => {
    const history = useHistory()

    const handleClick = () => {
        console.log("buttoinojhnbjd")
        history.push("/")
    }

    return (
        <div>
            <h1>Hello Vikash</h1>
            <Button variant="contained" color="primary" onClick={handleClick}>Go Back</Button>
        </div>
    )
}

export default SingleCustomer
