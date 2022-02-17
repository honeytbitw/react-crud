import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import Login from './login';
import Signup from './signup';
function App() {

  // const person = {name:'yoshi', age:30}

  return (
  <Router>  <div className="App">
      <Navbar> </Navbar>
     <div className="content">
       {/* <h1>App Component</h1> */}
      <Switch>
        <Route path = "/login">
        <Login/>
        </Route>
       
        <Route path = "/signup">
          <Signup/>
        </Route>
        <Route exact path = "/"> 
           <Home/> 
        </Route>
        <Route path = "/create"> 
           <Create/> 
        </Route>
        <Route path = "/blogs/:id"> 
           <BlogDetails /> 
        </Route>
      </Switch>
       {/* <p>{person.name}</p> */}
     </div>
    </div>
    </Router>
  );
}

export default App;
