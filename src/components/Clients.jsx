import React from 'react'
import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section id='clients' className=' flex flex-wrap justify-between align-center my-4 '>
      {clients.map((client)=>(
        <div className='flex flex-1 justify-center align-center  sm:min-w-[192px] min-w-[120px] m-5'>
          <img key={client.id} src={client.logo} alt="clientLogo" className='h-[60px] w-[192.25px] object-contain'/>
        </div>
      ))}

    </section>
  )
}

export default Clients