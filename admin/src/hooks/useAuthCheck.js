import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { checkAuthAsync } from 'src/redux/action/AuthSlice';

export const useAuthCheck = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(checkAuthAsync())
      },[dispatch])
}
