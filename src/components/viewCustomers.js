import React,{useEffect} from 'react'
import * as apiService from "../apiService/api"
import {fetchCustomerData} from '../actions/index'
import {useSelector, useDispatch} from 'react-redux'

const ViewCustomers = () => {

    const custList = useSelector(state => state.custReducer.list)
    const dispatch = useDispatch()
    console.log("data",custList)
    
    //API Function
    async function getData(){
        const response = await apiService.fetchData()
        dispatch(fetchCustomerData(response.data))
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
