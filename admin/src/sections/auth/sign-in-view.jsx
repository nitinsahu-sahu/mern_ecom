import { useState, useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';
import { clearLoginError, loginAsync, resetLoginStatus, selectLoggedInUser, selectLoginError, selectLoginStatus } from 'src/redux/action/AuthSlice';
import { useDispatch, useSelector } from 'react-redux'
import { FormHelperText } from '@mui/material';

// ----------------------------------------------------------------------

export function SignInView() {
  const navigate = useNavigate()
  const { handleSubmit, register, reset, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const loggedInUser = useSelector(selectLoggedInUser)
  const status = useSelector(selectLoginStatus)
  const error = useSelector(selectLoginError)
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (loggedInUser && loggedInUser?.isVerified) {
      navigate("/")
    }
  }, [loggedInUser, navigate])


  // handles login error and toast them
  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])

  // handles login status and dispatches reset actions to relevant states in cleanup
  useEffect(() => {
    if (status === 'fullfilled' && loggedInUser?.isVerified === true) {
      toast.success(`Login successful`)
      reset()
    }
    return () => {
      dispatch(clearLoginError())
      dispatch(resetLoginStatus())
    }
  }, [status, loggedInUser?.isVerified, reset, dispatch])

  const handleLogin = (data) => {

    const cred = { ...data };
    console.log(cred, 'login');

    dispatch(loginAsync(cred));
  };

  const renderForm = (
    <form onSubmit={handleSubmit(handleLogin)} style={{ width: '100%' }}>
      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <TextField
          fullWidth
          {...register('email', { required: 'Email is required' })}
          label="Email address"
          defaultValue="demo@gmail.com"
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 3 }}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        {errors.email && <FormHelperText sx={{ mt: 1 }} error>{errors.email.message}</FormHelperText>}

        <TextField
          fullWidth
          {...register('password', { required: 'Password is required' })}
          label="Password"
          defaultValue="helloWorld@123"
          InputLabelProps={{ shrink: true }}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        {errors.password && <FormHelperText sx={{ mt: 1 }} error>{errors.password.message}</FormHelperText>}

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="contained"
        >
          Sign in
        </LoadingButton>
      </Box>
    </form>
  );


  return (
    <>
      {renderForm}
    </>
  );
}
