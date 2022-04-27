import React from "react";
import axios from "axios";
function PutPass() {
  const putReq = async () => {
    let data = JSON.stringify({
      type: "password",
      value: "m_1927AM",
      temporary: false,
    });

    let config = {
      method: "put",
      url: "https://auth.proxy.dms-dev4.kdcbslab.dev/auth/realms/skylinedev4/protocol/openid-connect/auth/admin/realms/skylinedev4/users/235cea26-3e83-4281-b702-a397f8542ded/reset-password",
      headers: {
        Authorization:
          `Bearer ${ sessionStorage.getItem("tk")}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <button onClick={putReq}>PutPass</button>;
}

export default PutPass;
