import React,{useEffect} from 'react'
import * as apiService from "../apiService/api"

const ViewCustomers = () => {

    async function getData(){
        const response = await apiService.fetchData()
        console.log("response", response.data)
    }


    useEffect(() => {
       getData()
    }, [])


    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default ViewCustomers
