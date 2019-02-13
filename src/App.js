import React from "react";

//Step 1: Declare class component and extend the React.Component base class

class App extends React.Component {
  // You will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Step 2: Set-up our constructor and add state. State is an object that holds our data. It allows us to drive UI using data. Super(); which we declare before state, gives us access to our parents class methods. Inside this.state{} is where we add properties to state data.
  constructor() {
    super();
    this.state = {
      test: "This is a test"
    };
  }

  //Step 3: Render is a function which returns our JSX. Through interpolation, we can reference the state object by using the *THIS* keyword which points to an object on the class constructor

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h2>{this.state.test}</h2>
      </div>
    );
  }
}

export default App;
