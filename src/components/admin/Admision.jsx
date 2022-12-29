import React, {useState} from 'react';
import QrReader from 'react-weblineindia-qrcode-scanner';

const Admision = () => {
    const [result, setResult] = useState("No result");

    const handleError = (err) => {
        console.log(err)
    }



    const handleScan = (data) => {
        if(result === 'No result' || result === null){
            setResult(data);
        }
    }

  return (
    <div>
      <QrReader
        delay={300}
        style={{height: 240, widht: 320}}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
      {console.log(result)}
    </div>
  );
}

export default Admision