import React, { Component } from 'react';
import './App.css';
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <h3>This is from App</h3>
        <Login />
      </div>
    );
  }
}

export default App;


// import React from 'react';
// import './App.css';
// import Login from './Login';
// import UserContainer from './UserContainer';
// import { Route, Switch} from 'react-router-dom';
// import API from './API';
// import BackGroundImg from './project3_img/bg/bg1.jpg';
// import Footer from './Footer';

// const Img={
//   width:"100%",
//   height:"1200px",
//   background:`url(${BackGroundImg})`,
//   backgroundSize:'cover'
// }

// const My404 = ()=>{
//   return(
//     <div>
//       You are LOST!
//     </div>
//   )
// }

// const App = ()=>{
//   return(
//     <div className="App">
//     <div style={Img}> 
//     <main>
      
    
//       <Switch>
//         <Route exact path='/login' component={Login} />
//         <Route exact path='/' component={API}/>
//         <Route exact path="/users" component={UserContainer} />
//         <Route exact component={My404} />
//       </Switch>
//        {/*</div>*/}{/**/}{/**/}{/**/}
//     </main>

    
//     </div>
//     </div>
//   )
// }


// export default App;




