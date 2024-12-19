import { Link } from "react-router-dom"

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] pt-8 h-screen flex justify-between flex-col w-full'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className="bg-white py-4 pb-7 px-4">
          <h2 className="text-[30px] font-bold">Get Started with Uber</h2>
          <Link to={'/login'} className="w-full flex items-center justify-center bg-black text-white py-3 mt-5  rounded-lg">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
