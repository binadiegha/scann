import React from 'react'
import { Container } from './ticket-modal.styles'
import { ScanningSignal } from '../../pages/qr-scanner/qr-scanner.styles'
import Button from '../button';
import axios from 'axios';
import CLOSER from '../../assets/close.svg';

const TicketModal = ({data, setModal}:any) => {

  const validateTicket = async (id:string) => {
    // validate-ticket

    const res = await axios({
      method: 'put',
      url: 'https://uzu-tickets.herokuapp.com/v1/api/scanner/validate-ticket',
      headers: {}, 
      data: {
        ticketId: id, // This is the body part
      }
    });
    console.log(res);

  
    return setModal(false)
  }
  return (
    <Container>

      <div className="w-full h-[94%] bg-white absolute bottom-0 card px-[20px]">

        {/* top section */}
       <div className=' border-b-2 mx-auto mb-5'>
        <ScanningSignal>
            <span className='dot'></span> Scan Success <span className='absolute top-5 right-0' onClick={() => setModal(false)}><img alt="close" src={CLOSER}/></span>
          </ScanningSignal>
       </div>

      {/* other */}
      <div>
        <h2 className='my-2 font-bold text-lg'>{data?.tickets[0]?.event?.title}</h2>
        <div className='rounded-xl overflow-hidden h-[200px] '>
          <img className='object-cover' alt="event scene" src={data?.tickets[0]?.event?.image?.landscape} />
        </div>

        <h2 className='my-2 font-bold'>{data?.userEmail}</h2>
        <p className=' text-slate-400'>Thos is a valid ticket and this ticket admits the individual whose detail is found herein</p>

        { data.isUsed ? <p className=' my-4 text-red-600 border-2 border-red-600 py-[25px] px-[15px] rounded-xl bg-red-200 font-semibold'>This ticket has already been used</p> : ''}
      </div>

      {/* section */}

      <div className='w-full flex justify-between items-center h-[60px] border-b-2'>
        <span>Customer</span>
        <h3 className='text-[var(--primary-color)]'>{data?.userFirstName+ ' '+data?.userLastName}</h3>
      </div>

      {/* tickets */}
      {
        data?.ticketSummary.map( (ticket:any) => <div key={data.id} className='w-full flex justify-between items-center h-[60px] border-b-2'>
        <span>{ticket.name}</span>
        <h3 className=''>x {ticket.amountToPurchase}</h3>
      </div>)
      }



      {/* end of ticket details */}

      <div className='mt-5'>
      <Button handleClick={() => validateTicket(data.id)}>Validate ticket</Button>
      </div>

      {/* end */}
      </div>

    </Container>
  )
}

export default TicketModal