import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { userContext } from '../App'
import axios from 'axios'

const UserDetails = () => {
    const { id } = useParams()
    const { fetchSingleUser, user } = useContext(userContext)
  
    useEffect(() => {
        fetchSingleUser(id)
    }, [id])


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col mx-auto">

                        <h3>Details of <strong>{user.name}</strong> </h3>
                        <h4>Email : {user.email}</h4>
                        <h4>Phone : {user.phone}</h4>
                        <h4>Company : {user.company && user.company.name}</h4>
                      
                        <h4>Zip Code : { user.address && user.address.zipcode}</h4>
                        <h4>City : {user.address && user.address.city}</h4>
                           
                       
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserDetails
