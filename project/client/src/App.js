// import Login from "./pages/login/Login";
import LandingPage from "./pages/landingPage/LandingPage";
// import Register from "./pages/register/Register";
 import ComplainForm from "./pages/complainForm/complainForm"
import MultiForm from "./pages/multiForm/MultiForm";
import { useContext, useEffect, useState } from "react";
import { Context } from "./context/Context";
import LoaderAnimation from "./pages/bookLoader/BookLoader";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rules from "./pages/rules/Rules";
import Testimonials from "./pages/testimonials/Testimonials";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Chat from "./pages/chat/Chat";
import Track from "./pages/track/Track"
import Sessions from "./pages/sessions/Sessions"
import Blogs from "./pages/blogs/Blogs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";



function App() {
  
  const {user}=useContext(Context);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  
  return (  
    
    
    <Router>
    <Route exact path="/">
    <div>
    {
      loading ? 
      <LoaderAnimation/>
      :
     <div>
     <LandingPage/>
     </div>
    }
    
    </div>
</Route>
   
    <Switch>
    {/* <Route exact path="/register">
   <Register />
</Route>
 <Route path="/login">
 <Login/>
       </Route> */}

 <Route exact path="/landingPage">
 <LandingPage/>
       </Route>

       <Route path="/complain">
 <ComplainForm/>
 
       </Route>

       <Route path="/multiForm">
 <MultiForm/>
       </Route>
       <Route path="/laws">
 <Rules/>
       </Route>
       <Route path="/testimonials">
 <Testimonials/>
       </Route>
        <Route path="/about">
 <About/>
       </Route>
       <Route path="/contact">
 <Contact/>
       </Route> 
       <Route path="/chat">
 <Chat/>
       </Route> 
       <Route path="/track">
 <Track/>
       </Route>
       <Route path="/session">
 <Sessions/>
       </Route>
       <Route path="/blogs" component={Blogs}/>
 
       
  </Switch>
  </Router>
   
   
   
  );
}

export default App;
