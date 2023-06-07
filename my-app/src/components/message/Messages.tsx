import { log } from 'console';
import React, { useEffect, useRef } from 'react'

interface MessagesProps {
  message: any;
}

const Messages = ({ message }: MessagesProps) => {

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current ?. scrollIntoView({behavior: "smooth"})
}, [])

  return (

   
    <>
      <div className='  z-0 '
    
      >
        <div className="flex-1 mx-2   justify-between flex flex-col">

          <div id="messages" className="flex flex-col  space-y-4 p-2.5   overflow-y-none scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            {
              message.message ? <>
                <div className=" ">
                  <div className="flex  ">
                    <img src={message.sender?.image}

                      alt="My profile"
                      className="w-6 h-6 rounded-full  order-1 object-cover" />
                    <div className="flex flex-col space-y- text-xs max-w-xs mx-2 order-2 items-start">
                      <div> {
                        <span className="px-5 py-4 rounded-xl inline-block rounded-tl-none text-sm font-Mulish shadow-md bg-[#FFFFFF] text-[#606060]">
                          {
                            message.message
                          } </span>
                      }

                      </div>
                    </div>

                  </div>
                </div>
              </> : <>
                <div className="chat-message">
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                      <div>  <span className="px-6 py-4 rounded-xl inline-block rounded-br-none bg-[#1C63D5] text-white shadow-md font-Mulish text-sm ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, qui quos libero neque harum voluptatibus
                      </span>

                        <div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            } </div>


        </div>
      </div>
    </>
  )
}

export default Messages