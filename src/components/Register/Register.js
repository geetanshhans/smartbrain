import React from "react";


const Register = ({onRouteChange}) => {
return (
<article className="mw6 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5 bg-white" >
    <main className="pa4 black-80">
        <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
            </fieldset>
            <div className="">
            </div>
            <div className="lh-copy mt3">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={() => onRouteChange('home')} value="Sign Up" />
            </div>
        </div>
    </main>
</article>
)}

export default Register;