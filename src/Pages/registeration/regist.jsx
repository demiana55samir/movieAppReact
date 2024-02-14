import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({ mood: "onChange" });

  let password;
  password = watch("password", "");

  return (
    <>
      <form
        onSubmit={handleSubmit()}
        style={{ width: "1000px", paddingLeft: "300px" }}
      >
        <div style={{textAlign:'center'}}>
            <h1>Registration Form</h1>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name </label>
          <br></br>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
          />
          {errors.name && <p className="text-danger">Invalid Name</p>}
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email </label>
          <br></br>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z]{3,8}[0-9]{1,5}(@)(gmail|yahoo)(.com)$/,
            })}
            placeholder="Enter email"
          />
          {errors.email && <p className="text-danger">Invalid Email</p>}
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User Name </label>
          <br></br>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            {...register("userName", { required: true, pattern: /^\S+$/ })}
            aria-describedby="emailHelp"
            placeholder="Enter Your User Name"
          />
          {errors.userName && <p className="text-danger">Invalid User Name ,it must have no spaces</p>}
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <br></br>
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              minLength: 8,
            })}
            id="exampleInputPassword1"
            placeholder="Password"
          />
          {errors.password && <p className="text-danger">Invalid Password</p>}
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="exampleInputConfirmPassword">Confirm Password</label>
          <br></br>
          <input
            type="password"
            className="form-control"
            {...register("confirmPassword",{
                required: true,
                minLength: 8,
                validate: (value) => value === getValues("password")
              })}
            id="exampleInputConfirmPassword"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <p className="text-danger">Passwords do not match</p>}
        </div>
        <br></br>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
