import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from "./components/List";

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwODQ5MTMzODk5MjI4NTIw/lebron-james-run.jpg",
      age: 36,
      note: "Allegic to staying on the same team"
    }
  ])
  
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
