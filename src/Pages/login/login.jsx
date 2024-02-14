import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

const LoginForm = () => {
    const{register , handleSubmit , formState:{errors}} = useForm({mood:'onChange'})

    const [type, setType]=useState('password');
    const [icon, setIcon]=useState(eyeOff);
  
    const handleToggle=()=>{    
      if(type==='password'){
        setIcon(eye);      
        setType('text');
      }
      else{
        setIcon(eyeOff);     
        setType('password');
      }
    }
  return (
    <>
   <form onSubmit={handleSubmit()} style={{width:'1000px' , paddingLeft:'300px'}}>
   <div style={{textAlign:'center'}}>
            <h1>Login Form</h1>
        </div>
   <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label><br></br>
    <input type="email" className="form-control" id="exampleInputEmail1"
      {...register('email',{required:true,pattern:/^[a-zA-Z]{3,8}[0-9]{1,5}(@)(gmail|yahoo)(.com)$/})}
     aria-describedby="emailHelp" placeholder="Enter email"/> 
     {errors.email && <p className="text-danger">Invalid Email</p>}
  </div>
  <br></br>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label><br></br>
    <div style={{display:'flex'}}>
    <input type={type} className="form-control"
    {...register('password',{required:true,pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,minLength:8})}
     id="exampleInputPassword1" placeholder="Password"/>
      <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
    </div>
      {errors.password && <p className="text-danger">Invalid Password</p>}
  </div>
  <br></br>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  );
};

export default LoginForm;
