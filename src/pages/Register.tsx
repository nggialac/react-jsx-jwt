import React, { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router-dom";

export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) =>{
        e.preventDefault();
        // console.log({
        //     name,
        //     email,
        //     password
        // });

        await fetch('http://localhost:3333/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password,
            })
        });
        setRedirect(true);
    }

    if(redirect){
        return <Redirect to="/login"/>
    }
    

  return (
    <div>
      <form className="form-signin form-body" onSubmit={submit}>
        <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="text"
          id="inputName"
          className="form-control"
          placeholder="Name"
          required
          onChange={e=>setName(e.target.value)}
        />

        <label htmlFor="inputEmail" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
          onChange={e=>setEmail(e.target.value)}
        />

        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          onChange={e=>setPassword(e.target.value)}
        />
        <div className="checkbox mb-3"></div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
