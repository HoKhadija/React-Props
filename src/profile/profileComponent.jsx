import React from "react";
import PropTypes from "prop-types";

export default function ProfileComp({ children, fullName, bio, profession, handleName }) {
        // Inline Style
    const profileStyle = {
        textAlign: "center",
        backgroundColor: "#FFEFEF",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
    };
    const fnStyle = { color: '#330019' };
    const pStyle = { color: '#660033', fontSize: 18, margin: 25 };
    const spStyle = { fontWeight: "bold" };
    const btnStyle = { 
        backgroundColor: "#FFCCFF", 
        borderWidth: 1, borderStyle: 'solid', borderColor: "#330019", 
        color:"#330019",
        fontWeight: "bold", 
        cursor: "pointer",
    }

        // Handle the click event and call the handleName function passed as prop
    function handleClick(){
        handleName(fullName);
    };

    return (
        <div style={profileStyle}>
            <div style={{ marginTop: 15 }}>{children} </div>
            <h2 style={fnStyle}>{fullName}</h2>
            <p style={pStyle}>
                <span style={spStyle}> My Bio : </span>{bio}
            </p>
            <p style={pStyle}>
                <span style={spStyle}>My Profession : </span>{profession}
            </p>

            <button onClick={handleClick} style={btnStyle}>Show Name</button>
        </div>
    )
}

    //Default Props
ProfileComp.defaultProps = {
    fullName: 'HONNIT Khadija',
    bio: 'Hardworking and dedicated, possessing a team-oriented mindset and a great ability to adapt. My first experiences have allowed me to strengthen my knowledge in the field of management control.',
    profession: 'Management Control',
    handleName: (name) => alert(`The name of the profile user is ${name}.`),
};

    //PropTypes
ProfileComp.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element.isRequired,
    handleName: PropTypes.func.isRequired
};