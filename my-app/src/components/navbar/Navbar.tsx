import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { HiOutlinePhone } from 'react-icons/hi';
import { GoReport } from 'react-icons/go';
import axios from 'axios';

const Navbar = () => {

  const [show, setShow] = useState(false)
  const [navData, setNavData] = useState<any>([])
  const [image, setImage] = useState<any>([])


  // Api calling
  useEffect(() => {
    const apiHeader = () => {
      axios.get('https://qa.corider.in/assignment/chat?page=0')
        .then((res) => {
          //  console.log("data",res.data);
          setNavData(res.data)
          setImage(res.data?.chats)

        }).catch((err) => {
          console.log(err);
        })
    }
    apiHeader()
  }, [])

  //ShowModal
  const handleModal = () => {
    setShow(!show)
  }

  //filter
  const resultArray: any[] = [];
  image.forEach((item: any) => {
    const fieldValue: any = item.sender?.image;
    resultArray.push(fieldValue);
  });
  console.log("resultArray", resultArray);

  //Sorted image Array
  const sortedArray: number[] = Array.from(new Set(resultArray)).sort();
  console.log("sortedArray", sortedArray);

  return (
    <div className=' absolute top-0 right-0 left-0 '>
      <div className='px-4'>
        <div className='flex justify-between items-center  pt-5'>
          <div className='flex flex-row gap-2 items-center justify-center'>
            <div className='text-4xl font-Mulish'>
              <BsArrowLeftShort />
            </div>

            <h1 className='text-2xl font-bold font-Mulish text-[#141E0D]'>{navData?.name}</h1>

          </div>

          <div className='text-2xl font-thin text-[#141E0D]'>
            <BiEdit />
          </div>

        </div>
        {/* Image section */}
        <div>
          <div className='flex pt-2 gap-4 items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div>
                {/* <img className='w-12 h-12 object-cover rounded-full' src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                <div className="fle items-center justify-center ">
                  <div className="fle items-center justify-center">
                    <div className="fle h-12 w-12 items-center justify-center rounded-full bg-gray-200 overflow-hidden">
                      <div className={` ${sortedArray.length >= 4 ? 'grid grid-cols-4' : ' flex flex-wrap'} `}>
                        {
                          sortedArray.length > 3 ?
                            <>
                              {
                                sortedArray.map((item: any, index: number) => (
                                  <img key={index} src={item} className='h-6 w-6 col-span-2 object-cover' />
                                ))
                              }
                            </>
                            :
                            <>
                              {
                                sortedArray.map((item: any, index: number) => (
                                  <img key={index} src={item} className='h-6 w-6  flex-grow object-cover' />
                                ))
                              }
                            </>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start '>
                <h3 className='text-gray-600 font-Mulish '>From <span className=' text-[#141E0D] font-bold  text-[19px]'>{navData?.from}</span></h3>
                <h3 className='text-gray-600 font-Mulish'>To <span className='text-[#141E0D] font-bold text-[19px]'> {navData?.to}</span></h3>
              </div>
            </div>
            <div className='text-3xl relative' >
              <div onClick={handleModal}>
                <BiDotsVerticalRounded />
              </div>
              {
                show &&
                <div>
                  <div className='absolute z-30 bg-[#FFFFFF] right-0  top-8  rounded-lg py-2 drop-shadow-md'>
                    <div className='w-40'>
                      <div className=' '>
                        <div className='flex items-center justify-start gap-3 pl-2'>
                          <div className='text-lg'>
                            <FiUsers />
                          </div>
                          <h4 className='font-Mulish text-sm text-[#141E0D]  '>Members</h4>
                        </div>
                        <hr className="h-px my-3  bg-gray-200 border-0 dark:bg-gray-700"></hr>
                      </div>

                      <div className=' '>
                        <div className='flex items-center justify-start gap-3 pl-2'>
                          <div className='text-lg'>
                            <HiOutlinePhone />
                          </div>
                          <h4 className='font-Mulish text-sm text-[#141E0D] '>Share Numbers</h4>
                        </div>
                        <hr className="h-px my-3  bg-gray-200 border-0 dark:bg-gray-700"></hr>
                      </div>

                      <div className=' '>
                        <div className='flex items-center justify-start gap-3 pl-2'>
                          <div className='text-lg'>
                            <GoReport />
                          </div>
                          <h4 className='font-Mulish text-sm text-[#141E0D] '>Report</h4>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px my-3  bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  )
}

export default Navbar