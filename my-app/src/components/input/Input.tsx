import React from 'react'
import { FiPaperclip } from 'react-icons/fi';
import { RiSendPlane2Line } from 'react-icons/ri';

const Input = () => {
  return (
    <div className=''>
      <div className=''>
        <input className='absolute bg-[#FFFFFF] right-0 left-0 bottom-10 py-3 px-3 mx-4 rounded-lg text-sm text-[#B7B7B7] font-Mullishs_fade' type="text" placeholder='Replay to @Rohit Yadhav' />
        <div className='absolute bottom-[50px] right-[62px] text-lg text-[#141E0D]'>
          <FiPaperclip />
        </div>
        <div className='absolute bottom-[50px] right-7 text-lg text-[#141E0D]'>
          <RiSendPlane2Line/>
        </div>
      </div>

    </div>
  )
}

export default Input