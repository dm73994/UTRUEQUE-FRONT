import React from 'react'
import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema, defaultRegisterValues } from './Schemas';

const RegisterView = () => {

  const { handleSubmit, register, control, formState: { errors } } = useForm({
    defaultValues: defaultRegisterValues,
    resolver: yupResolver(RegisterSchema)
  })

  const onSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <Grid container >

        <Grid item xs={12} mt={2}>
          <TextField
            label={'Name or username'}
            placeholder={'Name or username'}
            type={'text'}
            {...register("user")}
            fullWidth
          />
          <p>{errors.user?.message}</p>
        </Grid>

        <Grid item xs={12} mt={2}>
          <TextField
            label={'Email'}
            placeholder={'email@email.com'}
            type={'email'}
            {...register("email")}
            fullWidth
          />
          <p>{errors.email?.message}</p>
        </Grid>

        <Grid item xs={12} mt={2}>
          <TextField
            label={'password'}
            placeholder={'password'}
            type={'password'}
            {...register("password")}
            fullWidth
          />
          <p>{errors.password?.message}</p>
        </Grid>

        <Grid container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Grid item xs={12} sm={12} mt={2} >
            <Button variant={'contained'} type={'submit'} color={'secondary'} > CREATE ACCOUNT </Button>
          </Grid>
        </Grid>

      </Grid>
    </form>
  )
}

export default RegisterView