import React,{Component} from "react";
// import {connect} from "react-redux";
// import {combineActionCreator} from "react-redux";

export default class SearchBar extends Component {
constructor(props)
{
  super(props);
  this.onInputChange = this.onInputChange.bind(this);

  this.state = {term : ""};
}
//passing an event here to the event handler, it is not a react thing , it is a vanilla javascript thing
onInputChange(event)
{
 console.log(event.target.value);
 this.setState ({term: event.target.value});
}

onFormSubmit (event)
{
  //just tell the browser to not submit the form
  event.preventDefault();
}

render()
{
    return (
        <form onFormSubmit={this.onSubmit} className="input-group">
            <input
            placeholder="Get a five-day forecast in your favourite city"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}/>
            <span className="input-group-btn">
               <button type="submit" className="btn btn-secondary"> Search </button>
            </span>
        </form>        
        
    );
}

}

// function getStateToProps ()
// {

// }

//  function combineActionCreator()
//  {

//  }

//  export default (getStateToProps,combineActionCreator)(SearchBar);