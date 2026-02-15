import React from 'react'

const loginpage = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-[#1e2330] flex items-center justify-center p-4 md:p-10 font-sans">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* --- ส่วนซ้าย: ข้อความและโลโก้ --- */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-between h-full space-y-8 relative">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Water & <br />
              Electricity
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-[#ff9f65] mt-2">
              Billing System
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              ระบบจัดการค่าน้ำ ค่าไฟ <br />
              พร้อมระบบสะสมคะแนนผู้เช่า
            </p>
          </div>

          {/* ไอคอนด้านล่างซ้าย  */}
          <div className="flex gap-4 mt-12 md:mt-24">
            {/* Icon: Lightning */}
            <div className="text-[#ff9f65] w-8 h-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            {/* Icon: Water Drop */}
            <div className="text-[#ff9f65] w-8 h-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 22c4.97 0 9-4.03 9-9 0-4.97-9-13-9-13S3 8.03 3 13c0 4.97 4.03 9 9 9z" />
              </svg>
            </div>
            {/* Icon: Bill/Document */}
            <div className="text-[#ff9f65] w-8 h-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- ส่วนขวา: การ์ด Login --- */}
        <div className="w-full md:w-[450px]">
          <div className="bg-[#dcdcdc] rounded-[3rem] p-8 md:p-12 shadow-2xl">
            
            {/* Header: Sign in + User Icon */}
            <div className="flex items-center gap-3 mb-10">
              <h2 className="text-4xl font-bold text-[#1e2330]">Sign in</h2>
              <svg className="w-8 h-8 text-[#1e2330]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-[#1e2330] font-bold mb-2 ml-1">Username</label>
                <input 
                  type="text" 
                  placeholder="Enter your username" 
                  className="w-full bg-white rounded-full px-6 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff9f65] shadow-sm"
                />
              </div>

              <div>
                <label className="block text-[#1e2330] font-bold mb-2 ml-1">Password</label>
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="w-full bg-white rounded-full px-6 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff9f65] shadow-sm"
                />
              </div>

              <div className="pt-4 flex justify-center">
                <button 
                  type="button"
                  className="bg-[#ff9f65] text-[#1e2330] font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#ff8f4d] transition-colors"
                >
                  Login
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default loginpage