import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Input from '../components/input/Input'
import Message from '../components/message/Message'

const ChatPage = () => {
  return (
    <>
      <div className='md:h-screen  xl:absolute right-[500px] left-[500px]'>
        <Navbar />
        <Message />
        <Input />
      </div>
    </>
  )
}

export default ChatPage