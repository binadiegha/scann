import React, { useState } from 'react'
import {QrScanner as Qs} from '@yudiel/react-qr-scanner';



const QrScanner = () => {
  const [data, setData] = useState('no data yetx');

  const handleErr = (err:any) => {
    console.log(err)
  }

  const handleScan = (datum:any) => {
    setData(datum)
  }
  return (
    <>
       <Qs
        constraints={{facingMode: 'environment'}}
          onDecode={handleScan}
          onError={handleErr}
      />

      <p>{data}</p>
  </>
  )
}

export default QrScanner