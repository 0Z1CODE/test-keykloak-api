import React, {useEffect} from "react"
import GetToken from "./Components/GetToken";
import PutPass from "./Components/PutPass";
// import axios from "axios";



function App() {
 useEffect(()=> {
    // document.cookie = "lol=test"
  },[])
  return (
    <>
      <GetToken></GetToken>
      <PutPass></PutPass>
    </>
  );
}

export default App;
