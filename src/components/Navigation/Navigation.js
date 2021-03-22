import React from "react";


const Navigation = ({onRouteChange,isSignedIn}) => {
    if(isSignedIn === true){
    return (
        <nav style = {{display : "flex" , justifyContent : "flex-end"}} onClick = {() => onRouteChange('signin')}>
            <p className = 'f3 link dim black underlined pa3 pointer'>Sign out</p>
        </nav>
    )}
    else{
        return(
            <nav style = {{display : "flex" , justifyContent : "flex-end"}} onClick = {() => onRouteChange('register')}>
            <p className = 'f3 link dim black underlined pa3 pointer'>Sign Up</p>
        </nav>
        )
    }
}

export default Navigation;