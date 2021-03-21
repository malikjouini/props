import React from 'react'

function Profile(props) {
    const handleName = () => {
        alert(props.fullName);
    }
    return (
        <>
            <p> {props.fullName} </p>
            <p>{props.bio}</p>
            <p>{props.profession}</p>
            <div>{props.children}</div>
            <button onClick={handleName}>click me</button>
        </>

    )

}


Profile.defaultProps = {
    fullName: "test test"
};
export default Profile
