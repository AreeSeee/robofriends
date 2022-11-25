import React from "react";

const Searchbox=(props)=>{

    return(
        <div className="pa2">
            <input onChange={(e)=>{
                return props.searchfield(e.target.value);
            }} className="pa3 ba b--green bg-light-blue" type="text" placeholder="search robos"/>

        </div>
        

    );
}
export default Searchbox;