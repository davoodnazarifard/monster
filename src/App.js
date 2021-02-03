import React , {Component} from 'react'

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
/*import logo from './logo.svg';*/
import './App.css';
import './components/card-list/card-list.styles.css'

 class App extends Component {
   constructor(){
     super();
     this.state = {
        students:[],
        searchField:''
     };
      
   }

   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(students => this.setState({students:students}))
   }

   handleChange = (e) => {
      this.setState({searchField:e.target.value})
   }
   
    
   render(){
    const {students,searchField} = this.state;
    const searchedMonsters = students.filter((student)=>
      student.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange}/>
        <CardList monsters={searchedMonsters}/>
      </div>
    );
   }
 }
export default App;
