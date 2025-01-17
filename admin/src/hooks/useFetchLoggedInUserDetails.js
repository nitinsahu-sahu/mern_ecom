import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from 'src/redux/action/AuthSlice';
import { fetchLoggedInUserByIdAsync } from 'src/redux/action/userSlice';


export const useFetchLoggedInUserDetails = (deps) => {
    
    const loggedInUser=useSelector(selectLoggedInUser)
    const dispatch = useDispatch();

    useEffect(()=>{
        /* when a user is logged in then this dispatches an action to get all the details of loggedInUser, 
        as while login and signup only the bare-minimum information is sent by the server */
        if(deps && loggedInUser?.isVerified){
          dispatch(fetchLoggedInUserByIdAsync(loggedInUser?._id))
        //   dispatch(fetchAllBrandsAsync())
        //   dispatch(fetchAllCategoriesAsync())
    
        //   if(!loggedInUser.isAdmin){
        //     dispatch(fetchCartByUserIdAsync(loggedInUser?._id))
        //     dispatch(fetchAddressByUserIdAsync(loggedInUser?._id))
        //     dispatch(fetchWishlistByUserIdAsync(loggedInUser?._id))
        //   }
        }
    },[deps, loggedInUser?._id, loggedInUser?.isVerified, dispatch])
}
