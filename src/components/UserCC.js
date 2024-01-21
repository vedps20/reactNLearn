import React from "react";

class UserCC extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Earth",
            }
        }

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/vedps20");
        const json = await data.json();

        this.setState({
            userInfo : json,
        });

        console.log(json);
    }

    render(){

        const {name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h1>Name : {name}</h1>
                <h2>Location : {location}</h2>
            </div>
        )
    }
}

export default UserCC;