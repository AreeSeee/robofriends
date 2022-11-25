import React, { Component } from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import {robots} from "./robots";
import "./App.css";
import axios from "axios";
import Scroll from "./Scroll"


class App extends Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
            this.setState({
                robots:response.data,
            })
          });

    }
    searchfield=(text)=>{
        let array=robots;
        let filter= array.filter((item)=>{
            return item.name.toLocaleLowerCase().includes(text)
        })
        if(filter.length>0){
            this.setState({
                robots:filter

            })
        }else{
            this.setState({
                robots:robots
            })
        }

        }
       
        
    
        
    
    render(){
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox searchfield={this.searchfield} />
                <Scroll>
                <Cardlist robots={this.state.robots}/>

                </Scroll>
                
    
            </div>
            
        );
    }
   
}
export default App;