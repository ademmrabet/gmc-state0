import React, { Component } from 'react'
import './App.css'
import Profile from './components/Profile'

export default class App extends Component {
state = {
  Person: {
    imgSrc:"",
    fullName:"Mrabet Adem",
    bio:"Hello i'm a robot",
    profession:"a useless bot"
  },
  shows: false,
  intervall:null,
  timer:0
}

  toggleVision = ()=>{
    this.setState({
      shows: !this.state.shows
    })
  }
  render() {
    return (
      <div>
        <h1>Hi there!</h1>
        <p>To see my profile please click on that sexy button below!</p>
        <button onClick={this.toggleVision}>click Me!</button>
        {this.state.shows ? (
          <div>
            <Profile data={this.state.Person}/>
          </div>
        ):(<h6>YOU SHOULD REALLY DO IT FOR SOME MAGIC!</h6>
        )
        }
        <h6>this component was mounted <b>{this.state.timer}</b> seconds ago</h6>
      </div>
    );
  }
  componentDidMount(){
    this.setState({
      intervall:setInterval(()=>{
        this.setState({timer:this.state.timer +1});
      }, 1000)
    });
  }
}

