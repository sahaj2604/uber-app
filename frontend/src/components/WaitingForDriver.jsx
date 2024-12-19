import React from 'react'

const WaitingForDriver = ({setWaitingForDriver}) => {
  return (
    <div>
      <h5
        className="absolute top-1 w-[90%] mx-auto text-center text-gray-300 text-2xl"
        onClick={() => setWaitingForDriver(false)}
      >
        <i className="ri-arrow-down-wide-line "></i>
      </h5>
        <div className='flex items-center justify-between'>
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className='text-right'>
            <h2 className='text-lg font-medium'>Sahaj</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MO05 AB 1234</h4>
            <p className='text-sm text-gray-600'>Maruti Suziki Alto</p>
        </div>
        </div>
      <div className="flex flex-col gap-2 justify-between items-center">
        
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">563/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div>
          <div className="flex gap-5 items-center p-3 border-b-2">
          <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">563/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
            </div>
          </div>
          <div>
          <div className="flex gap-5 items-center p-3 ">
          <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Cash Cash
              </p>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default WaitingForDriver
