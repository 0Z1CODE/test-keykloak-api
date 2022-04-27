import React from "react";
import axios from "axios";
import qs from "qs";

function GetToken() {
  // React.useEffect(()=> {
  //   document.cookie = "lol=test"
  // },[])
  const getToken = async () => {
    let data = qs.stringify({
      grant_type: "password",
      username: "maxDeCoder",
      password: "m_1927AM",
      client_id: "test-portal",
    });
    let config = {
      method: "post",
      url: "https://auth.proxy.dms-dev4.kdcbslab.dev/auth/realms/skylinedev4/protocol/openid-connect/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        sessionStorage.setItem("tk", response.data.access_token)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <button onClick={getToken}>GetTokenRequest</button>;
}

export default GetToken;
