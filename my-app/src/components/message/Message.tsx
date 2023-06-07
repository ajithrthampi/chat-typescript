import React, { useEffect, useRef, useState } from 'react'
import Messages from './Messages'
import axios from 'axios'
import { debounce, throttle } from "lodash"

const Message = () => {

  const [data, setData] = useState<any>([])
  const [page, setPage] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const divRef = useRef<HTMLDivElement>(null)



  useEffect(() => {
    const apiData = () => {
      axios
        .get(`https://qa.corider.in/assignment/chat?page=${page}`)
        .then((res) => {
          console.log(res.data.chats);

          if (page === 0) {
            const newChats = [...res.data.chats, ...data];
            setData(newChats);
            setLoading(false);
          } else {
            setData((prevData: any) => [...prevData, ...res.data.chats]);
            setLoading(false);
          }
          if (divRef.current) {
            const newMessageHeight = divRef.current.scrollHeight - divRef.current.offsetHeight;
            divRef.current.scrollTo({ top: newMessageHeight, behavior: 'auto' });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    apiData();
  }, [page]);


  const handleScroll = () => {
    if (divRef.current) {
      const scrollTop = divRef.current.scrollTop;
      if (scrollTop === 0) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (divRef.current) {
      divRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div>
        <div className=' overflow-scroll z-0  absolute right-0 left-0  top-[135px]  bottom-20'

          ref={divRef}
        >
          {loading && <div className='text-2xl'>Loading</div>}

          {
            data.length > 0 && data?.map((value: any, index: number) => (

              <div key={index}

              >
                <Messages message={value} key={value.id} />
              </div>
            ))
          }


        </div>
      </div>


    </>
  )
}

export default Message