import React, { useState } from 'react'
import {QrScanner as Qs} from '@yudiel/react-qr-scanner';
import { Container, ScanningSignal } from './qr-scanner.styles';
import Button from '../../components/button';
import TicketModal from '../../components/ticket-modal';
import axios from 'axios';
import { Link } from 'react-router-dom';



const QrScanner = () => {
  const [data, setData] = useState(false);
  const [ticketData, setTicketData] = useState({})

  const handleErr = (err:any) => {
    console.log(err)
  }

  const handleScan = async (datum:any) => {
    // const data = await axios.get('https://uzu-tickets.herokuapp.com/v1/api/scanner/check-ticket', {
    //   params:{
    //       "ticketId": datum
    //   }
    // });

    const data = await axios({
      method: 'post',
      url: 'https://uzu-tickets.herokuapp.com/v1/api/scanner/check-ticket',
      headers: {}, 
      data: {
        ticketId: datum, // This is the body part
      }
    });

    console.log(data.data.data);
    setTicketData(data.data.data)
    setData(datum)
  
  }

  const setModal = (payload:boolean) => {
    console.log('modalll', payload);
    setData(payload)
  }

  const videoStyle = {
    width: '100%',
    height: '100%',
    margin: '0px',
  }

  const scannerStyle = {
    width: '100%',
    padding: '0',
    height: '60%',
    margin: ''
  }

  
  return (
    <Container>

        <ScanningSignal>
          <span className='dot'></span><h3>Scanning...</h3>
        </ScanningSignal>
       <Qs
          constraints={{facingMode: 'environment'}}
          onDecode={handleScan}
          onError={handleErr}
          videoStyle={videoStyle}
          containerStyle={scannerStyle}
      />

      <p>{data}</p>

      <span className='mt-10'>
      <Button type="secondary"><Link to='/'>Cancel Scan</Link></Button>
      </span>

      {
        data ? <TicketModal data={ticketData} setModal={setModal}/> : 'f'
      }
  </Container>
  )
}

export default QrScanner