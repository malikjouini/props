import React from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';



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
            <br/>
            <button className="btn btn-danger" onClick={handleName}>click me</button>
        </>

    )

}


Profile.defaultProps = {
    fullName: "Malik jouini"
}
Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string
}

export default Profile
