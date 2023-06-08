import { log } from 'console';
import React, { useEffect, useRef } from 'react'
const logo = require("../../assets/verify.png");

interface MessagesProps {
  message: any;
}

const Messages = ({ message }: MessagesProps) => {
  const USER_ID = '73785ed67d034f6290b0334c6e756433'

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (


    <>
      <div className='  z-0 '

      >
        <div className="flex-1 mx-2   justify-between flex flex-col">

          <div id="messages" className="flex flex-col  space-y-4 p-2.5   scrolling-touc "
          // ref={ref}
          >
            {
              message.sender?.user_id !== USER_ID ? <>
                <div className=" ">
                  <div className="flex  ">
                    <div className='absolute'>
                      <img src={message.sender?.image}
                        alt="My profile"
                        className="w-6 h-6 rounded-full  order-1 object-cover " />
                        {
                          message.sender?.is_kyc_verified === true && <img className='w-3 h-3 rounded-full absolute left-[13px] top-[13px]'
                        src={logo} alt="" />
                        }
                     
                    </div>
                    <div className="flex flex-col space-y- text-xs max-w-xs mx-2 order-2 items-start">
                      <div> {
                        <span className="px-2 mx-6 py-2 rounded-xl inline-block rounded-tl-none text-sm font-Mulish shadow-md bg-[#FFFFFF] text-[#606060]">
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
                      <div>  <span className="px-2 py-3 rounded-xl inline-block rounded-br-none bg-[#1C63D5] text-white shadow-md font-Mulish text-sm ">
                       {message?.message}
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