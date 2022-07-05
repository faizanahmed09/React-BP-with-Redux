import './App.css';
import PrivateHeader from './components/PrivateHeader';
import PublicHeader from './components/PublicHeader';
import PrivateRoute from './routes/PrivateRoutes';
import PublicRoute from './routes/PublicRoutes';
import {useSelector} from "react-redux";
import {useLayoutEffect, useState} from "react";
import {isLogin} from "./redux/AuthReducer";


function App() {

  const value = useSelector((state) => state.AuthReducer.isLogin);
  console.log("value", value);
  const[isAuthenticated, setIsAuthenticated] = useState(value);

  useLayoutEffect(() => {
    setIsAuthenticated(value);
  }, [value]);

  return (
    <>
    {
      isAuthenticated ?
      <>
        <PrivateHeader/>
          <PrivateRoute/>
      </>
      :
      <>
      <PublicHeader/>
        <PublicRoute/>
      </>
    }
    </>
  );
}

export default App;
