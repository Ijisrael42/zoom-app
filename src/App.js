import { useHistory } from 'react-router';
import './App.css';
// import React, { useEffect } from "react";
// import { Link, Router } from "react-router-dom";
declare var ZoomMtg;

ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.1/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

function Zoom() {

  // setup your signature endpoint here: https://github.com/zoom/websdk-sample-signature-node.js
  const signatureEndpoint = 'http://localhost:4000/questions/zoom-signature'
  const history = useHistory();
  // var meetingNumber = '74767890439'
  const role = 1
  const leaveUrl = 'http://localhost:3000'
  const userName = 'React'
  const userEmail = 'ijisrael42@gmail.com'
  const passWord = 'string'

  // useEffect(() => {
    const getSignature = () => {

      fetch(signatureEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role: role
        })
      }).then(res => res.json())
      .then(response => {
        console.log(response);
        startMeeting(response)
      }).catch(error => {
        console.error(error)
      })
    };

    const startMeeting = (params) => {
      document.getElementById('zmmtg-root').style.display = 'block'

      ZoomMtg.init({
        leaveUrl: leaveUrl,
        isSupportAV: true,
        success: (success) => {
          console.log(success)

          ZoomMtg.join({
            signature: params.signature,
            meetingNumber: parseInt(params.meetingNumber),
            userName: userName,
            apiKey: params.apiKey,
            userEmail: userEmail,
            passWord: passWord,
            success: (success) => {
              console.log(success)
            },
            error: (error) => {
              console.log(error)
            }
          })

        },
        error: (error) => {
          console.log(error)
        }
      })
    };

    // getSignature();
  // }, []);

  return (
    <div className="App">
      <main>
        <h1>Zoom WebSDK Sample React</h1>

        <button onClick={getSignature}>Join Meeting</button>
        {/* <Router>
          <Link to={`/zoom/${userEmail}/${role}`} > */}
            <button onClick={() => history.push(`/zoom/${userEmail}/${role}`) } type="button">Join Link</button>
          {/* </Link>
        </Router> */}
      </main>
    </div>
  );
}

export default Zoom;
