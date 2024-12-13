import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./components/Landing/Landing";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import SignInForm from "./components/SignInForm/SignInForm";
import { getUser, signout} from "./services/authService";
import Profile from "./components/Profile/Profile";

function App() {
  // we will use this state to store the logged user data
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();
  const handleSignout = () => {
    signout();
    setUser(null);
  }
  // Did not work
  // if(!user){
  //   navigate('/')
  // }

  return (
    <>
      <Navbar user={user}  handleSignout={handleSignout}/>
      <Routes>
        {user ? (
          <Route path="/" element={<Dashboard user={user}/>} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}

        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path='/signin' element={<SignInForm setUser={setUser} />} />
        <Route path="/profile/:id" element={<Profile />}  />
      </Routes>
    </>
  );
}

export default App;