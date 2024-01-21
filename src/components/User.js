import { useState } from "react";

const User = (props) =>{
    const [count, setCount] = useState(0);



    return (
        <div className="user-card">
            <h2>count : {count}</h2>
            <button onClick={
                () => {
                    setCount(count + 1);
                }
            }>
                increase count
            </button>
            <h1>{props.name}</h1>
            <h2>SDE</h2>
            <h3>systam faad dengeee</h3>
        </div>
    )
}

export default User;