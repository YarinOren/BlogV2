import './App.css';
import TopBar from './Components/TopBar';
import Posts from './Components/Posts';
import Sidebar from './Components/SideBar';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import Post from './Pages/Post';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <TopBar/>
        <Switch>
          <Route path="/about" component={AboutMe}/>
          <Route path="/contact" component={ContactMe}/>
          <Route path="/newpost" component={NewPost}/>
          <Route path="/post/:id" component={Post}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;