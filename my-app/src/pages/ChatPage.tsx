import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Input from '../components/input/Input'
import Message from '../components/message/Message'

const ChatPage = () => {
  return (
    <>
      <div className='  lg:absolute right-80 left-80'>
        <Navbar />
        <Message />
        <Input />
      </div>
    </>
  )
}

export default ChatPage