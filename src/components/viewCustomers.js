import React,{useEffect} from 'react'
import * as apiService from "../apiService/api"
import {fetchCustomerData} from '../actions/index'
import {useSelector, useDispatch} from 'react-redux'
import MaterialTable from 'material-table'
import Avatar from '@material-ui/core/Avatar';
import {TableBody, TableRow, TableCell }  from '@material-ui/core';
import { useHistory } from 'react-router'




const ViewCustomers = () => {
    const history = useHistory()

    const custList = useSelector(state => state.custReducer.list)
    const dispatch = useDispatch()
    console.log("data",custList)
    
    //API Function
    async function getData(){
        const response = await apiService.fetchData()
        dispatch(fetchCustomerData(response.data))
    }

    const num = custList && custList.map((v) => v.bids.map((c) => c.amount) )
    console.log("num", num)


    useEffect(() => {
       getData()
    }, [])

    const imageUrl = custList && custList.map((data) => data.avatarUrl )
    console.log("imageUrl", imageUrl)


    const handleClick = () => {
        history.push("/single-customer")
        console.log("clicked")
    }

   const columns = [
       {
           title:"Avatar",
          render:(row) => <i onClick={handleClick}><Avatar ><img src={imageUrl}/></Avatar></i>
       },
       {
           title:"Amount",
           field:"bids.map((data) => {data.amount})"
       },
        {
            title:"Customer FirstName",
            field:"firstname"
        },
        {
            title:"Customer LastName",
            field:"lastname"
        },
        { 
            title:"Email",
            field:"email",
        },
        {
            title:"Phone",
            field:"phone"
        },
        {
            title:"Premium",
            field:"hasPremium"
        },{
            title: "Bids",
            render:(row) => num[0]
        }
    ]

    return (
        <div>
            <h1>Customer Basic Details....</h1>
            <MaterialTable title="Customer Details"
            data={custList}
            columns={columns} 
            options={{
             sorting: true
             }}  
            />
            {custList && custList.map((data) => <Avatar src={data.avatarUrl} alt={data.avatarUrl}/> )}

        </div>
    )
}

export default ViewCustomers
