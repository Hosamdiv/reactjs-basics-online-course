import Navbar from "./components/NavBar";
import "./App.css";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import UserDetails from "./components/UserDetails";
import { IUserData } from "./interfaces/interface";

const App = () => {
  const codeProps = "CODEAWY";
  const aboutetest = "Aboute Us";
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [userData, setuserData] = useState <IUserData>({
    username: "",
    email: "",
    address: "",
    password: "",
  });

  return ( 
    <>
      <Navbar
        propse={codeProps}
        abouteTest={aboutetest}
        isLoggedIn={isLoggedIn}
        setIsloggedIn={setIsloggedIn}
      />
      {isLoggedIn ? (
          <UserDetails user={userData}/>
      ) : (
        <LoginForm
          setIsloggedIn={setIsloggedIn}
          setDatals={setuserData}
          datals={userData}
        />
      )}
    </>
  );
};

export default App;
