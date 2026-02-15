import React from 'react'

const dashboardtenant = () => {
  return (
    <>
        <div className="flex min-h-screen bg-white font-sans">
      
      {/* --- SIDEBAR (แถบซ้าย) --- */}
      <aside className="w-64 bg-[#1e2330] text-white flex flex-col p-6 fixed h-full md:relative md:min-h-screen">
        
        {/* Logo Text */}
        <h1 className="text-3xl font-bold italic mb-12 mt-2">Tenant</h1>
        
        {/* Menu Items */}
        <nav className="flex-1">
          <ul className="space-y-6">
            <li className="text-[#ff9f65] font-bold text-lg cursor-pointer">
              Dashboard
            </li>
            <li className="text-white hover:text-gray-300 text-lg cursor-pointer font-medium">
              My Bills
            </li>
            <li className="text-white hover:text-gray-300 text-lg cursor-pointer font-medium">
              Reward Points
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <div className="mt-auto mb-4">
          <button className="text-white hover:text-gray-300 text-lg font-medium cursor-pointer">
            Logout
          </button>
        </div>
      </aside>


      {/* --- MAIN CONTENT (เนื้อหาขวา) --- */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-4xl font-bold italic text-[#1e2330]">Dashboard</h2>
          
          <div className="text-right mt-4 md:mt-0 text-[#1e2330]">
            <p className="font-bold text-lg">สวัสดี ห้อง A203</p>
            <p className="text-sm text-gray-600">สรุปค่าใช้จ่ายประจำเดือน</p>
          </div>
        </div>

        {/* 1. ยอดรวมทั้งหมด (Total Amount) */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-[#1e2330] mb-3">ยอดรวมทั้งหมดของเดือนนี้</h3>
          <div className="w-full md:w-2/3 h-24 bg-gray-300 rounded-3xl shadow-inner">
            {/* ใส่ตัวเลขยอดเงินตรงนี้ เช่น <div className="p-6 text-3xl">5,000 ฿</div> */}
            
          </div>
        </div>

        {/* 2. รายการย่อย (Rent, Water, Elec) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* ค่าเช่าห้อง */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2 font-bold text-[#1e2330] text-lg">
              <span>ค่าเช่าห้อง</span>
              {/* Home Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <div className="w-full h-16 bg-gray-300 rounded-3xl shadow-inner">
                <div className='p-4 text-3xl text-[#1e2330]'>5000</div>
            </div>
          </div>

          {/* ค่าน้ำ */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2 font-bold text-[#1e2330] text-lg">
              <span>ค่าน้ำ</span>
              {/* Drop Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c4.97 0 9-4.03 9-9 0-4.97-9-13-9-13S3 8.03 3 13c0 4.97 4.03 9 9 9z" />
              </svg>
            </div>
            <div className="w-full h-16 bg-gray-300 rounded-3xl shadow-inner"></div>
          </div>

          {/* ค่าไฟ */}
          <div className="-flex flex-col itemscenter md:items-start">
            <div className="flex items-center gap-2 mb-2 font-bold text-[#1e2330] text-lg">
              <span>ค่าไฟ</span>
              {/* Lightning Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
              </svg>
            </div>
            <div className="w-full h-16 bg-gray-300 rounded-3xl shadow-inner"></div>
          </div>
        </div>

        {/* 3. สถานะ & คะแนนสะสม (Status & Points) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-4xl">
          
          {/* Status Indicators */}
          <div className="flex items-center gap-4">
            <span className="font-bold text-[#1e2330] text-lg mr-2">สถานะ :</span>
            
            <div className="flex flex-col gap-2">
              {/* จ่ายแล้ว */}
              <div className="flex items-center gap-2">
                <span className="text-gray-700">จ่ายแล้ว</span>
                <div className="w-6 h-6 rounded-full border-2 border-[#52ec62] flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#52ec62] rounded-full"></div>
                </div>
              </div>

              {/* ยังไม่จ่าย */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400">ยังไม่จ่าย</span>
                <div className="w-6 h-6 rounded-full border-2 border-[#ff6b6b] opacity-50"></div> 
              </div>
            </div>
          </div>

          {/* Reward Points */}
          <div className="w-full md:w-auto flex-1">
            <div className="flex justify-center md:justify-end items-center gap-2 mb-2 font-bold text-[#1e2330] text-lg">
              <span>คะแนนสะสม</span>
              {/* Star Icon */}
              <svg className="w-6 h-6 text-[#ff9f65]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="w-full md:w-64 h-16 bg-gray-300 rounded-3xl shadow-inner ml-auto"></div>
          </div>
        </div>

      </main>
    </div>
    </>
  )
}

export default dashboardtenant