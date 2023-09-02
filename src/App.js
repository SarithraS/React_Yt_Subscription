import React from "react";
import "./App.css";
import Classprops from "./Classprops";
import functionprops from "./functionprops";
import NewComp from "./Component/NewComp";

class App extends React.Component{

  style={
    fontStyle: "bold",
    color:"teal",
  };
  render(){
    return(
      <div>
        <h1 style={this.styles}>Welcome</h1>
        <Classprops/>
        

        
        <NewComp/>
      </div>
    );
  }
}
export default App;






/*import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div className="app">
      <h1>Counter App</h1>
      <Counter title="Counter 1" />
      <Counter title="Counter 2" />
    </div>
  );
}

export default App;*/

