import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search/searchBox.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      title: ""
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  onchangeHandler = e => { this.setState({ searchField: e.target.value , title : e.target.value }) }
  
  render() {
    const { monsters, searchField , title } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))


    return (

      <div className="App">
        <h1 className="Title">{title}</h1>
        <SearchBox placeholder="search monster" handleChange = {this.onchangeHandler} />
        <CardList monsters={filteredMonsters}>
        </CardList>

      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>hello my name is mohammad mahdi</p>
//         <a
//           className="App-link"
//           href="ht  tps://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
