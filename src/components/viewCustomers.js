import React,{useEffect} from 'react'
import * as apiService from "../apiService/api"
import {fetchCustomerData} from '../actions/index'
import {useSelector, useDispatch} from 'react-redux'
import MaterialTable from 'material-table'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router'
import Button from '@material-ui/core/Button';


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


    const handleClick = (row) => {
        console.log("row", row)
        history.push({pathname: "/single-customer", state:row})
    }

   const columns = [
       {
           title:"Id",
           field:"id"
       },
       {
           title:"Action",
           render: (row) => <Button variant="outlined" onClick={() => handleClick(row)}>View</Button>
       },
       {
           title:"Avatar",
          render:(row) => <Avatar style={{cursor:"pointer"}}  src={imageUrl[0]} />
       },
        {
            title:"FirstName",
            field:"firstname"
        },
        {
            title:"LastName",
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
        </div>
    )
}

export default ViewCustomers
//{custList && custList.map((data) => <Avatar src={data.avatarUrl} alt={data.avatarUrl}/> )}
