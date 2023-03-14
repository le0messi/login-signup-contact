import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormInputValidation } from 'react-form-input-validation';


const Login = () => {

    // var[sname,setsname]= useState()
    // const cap_value=(e)=>{
    //     setsname(sname=(e.target.value))
    //     console.log(sname)

    
    const [fields,errors,form]=useFormInputValidation({
        email_id :"",
        Password :""


    },{
      email_id :"required|email",
      Password:"required"

    })
  return (
    <Box style={{marginTop:100}}
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
      value={fields.email_id}
      onBlur={form.handleBlurEvent}
      onChange={form.handleChangeEvent}
    //   value={sname}
    //   onChange={cap_value}
        name='email_id'
        label='Email'
          helperText={errors.email_id?errors.email_id:""}
        id="outlined-error"
        />
    
     
     </div>
   
      <div>
      <TextField
      value={fields.Password}
      onBlur={form.handleBlurEvent}
      onChange={form.handleChangeEvent}

      type={'Password'}
        name='Password'
        label='Password'
        helperText={errors.Password?errors.Password:""}
        id="outlined-error-helper-text"
      />
    </div>
    
    </Box>
  )
}

export default Login
