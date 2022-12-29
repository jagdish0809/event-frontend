// import React, { useRef, useState } from "react";
// import QRCode from "qrcode";
// import { QrReader } from "react-qr-reader";

// const Admin = () => {
//   const [scanResult, setScanResult] = useState("");
//   const [scanResultWebCam, setScanResultWebCam] = useState("");
//   const qrRef = useRef(null);

//   const handleErrorFile = (error) => {
//     console.log(error);
//   };

//   const handleScanFile = (res) => {
//     if (res) {
//       setScanResult(res);
//     }
//   };

//   const handleErrorWebCam = (error) => {
//     console.log(error);
//   };
//   const handleScanWebCam = (result) => {
//     if (result) {
//       setScanResultWebCam(result);
//     }
//   };

//   // const onScanFile = () => {
//   //     console.log('hello')
//   //     qrRef.current.openImageDialog();
//   // }

//   return (
//     <div className="app__admin">
//       {/* <button className="" onClick={onScanFile}>
//         Scan QR Code
//       </button> */}
//       <h3>Qr Code Scan by Web Cam</h3>
//       <QrReader
//         delay={300}
//         style={{ width: "100%" }}
//         onError={handleErrorWebCam}
//         onScan={handleScanWebCam}
//       />
//       <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
//     </div>
//   );
// };

// export default Admin
// import React, { Component } from "react";
// import QrReader from "react-qr-scanner";

// class Admin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       delay: 500,
//       result: "No result",
//     };

//     this.handleScan = this.handleScan.bind(this);
//   }
//   handleScan(data) {
//     this.setState({
//       result: data,
//     });
//   }
//   handleError(err) {
//     console.error(err);
//   }
//   render() {
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     };

//     return (
//       <div>
//         <QrReader
//           delay={this.state.delay}
//           style={previewStyle}
//           onError={this.handleError}
//           onScan={this.handleScan}
//         />
//         <p>code: {this.state.result}</p>
//         {/* {console.log(this.state.result)} */}
//       </div>
//     );
//   }
// }

// export default Admin;

import React, { Component } from "react";
import QrReader from "react-weblineindia-qrcode-scanner";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 500,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
        {console.log(this.state.result)}
      </div>
    );
  }
}

export default Admin
  
