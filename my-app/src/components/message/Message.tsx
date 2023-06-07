    import React, { useEffect, useRef, useState } from 'react'
    import Messages from './Messages'
    import axios from 'axios'
import Loading from '../loading/Loading'
  
    const Message = () => {

      const [data, setData] = useState<Array<[]>>([])
      const [page, setPage] = useState<number>(0)
      const [loading, setLoading] = useState<Boolean>(true)
      const divRef = useRef<HTMLDivElement>(null)



      useEffect(() => {
        const apiData = () => {
          axios
            .get(`https://qa.corider.in/assignment/chat?page=${page}`)
            .then((res) => {
              if (page === 0) {
                setData([...res.data.chats, ...data]);
                setLoading(false);
                if (divRef.current) {
                  divRef.current.scrollTop = divRef.current.scrollHeight; 
                }
              } else {
                const newData = [...res.data.chats, ...data];
                setData(newData);
                setLoading(false);
                if (divRef.current) {
                  const newMessageHeight =  divRef.current.scrollHeight - (divRef.current.offsetHeight * page);
                  divRef.current.scrollTo({ top: newMessageHeight, behavior: 'auto' });
                }
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
            if (divRef.current.scrollHeight > divRef.current.offsetHeight) {
              divRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }
        }
      };

      useEffect(() => {
        if (divRef.current) {
          console.log("Current");
          
          divRef.current.addEventListener('scroll', handleScroll);
        }
        return () => {
          if (divRef.current) {
            divRef.current.removeEventListener('scroll', handleScroll);
          }
        };
      }, []);

      useEffect(() => {
        divRef.current ?. scrollIntoView({behavior: "smooth"})
    }, [])
    
      

      return (
        <>
          <div>
            <div className=' overflow-scroll z-0 absolute right-0 left-0 top-[135px] bottom-20 '
              ref={divRef}
            >
              {loading && <div className='text-2xl flex justify-center items-center'><Loading /></div>}
              {
                data.length > 0 && data.map((value: any, index: number) => (
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