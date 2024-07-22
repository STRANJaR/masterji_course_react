import React, { useState } from 'react'


function OtpForm() {
  const [otp, setOtp] = useState('')

  return (
    <main className='bg-[#3F72AF] min-h-screen' >
      <div className='flex flex-col justify-center items-center'>

      <h1 className='text-3xl text-center font-semibold mt-8 mb-32'>Chai aur Code</h1>
        
        <div className='bg-white text-black max-w-2xl h-36 flex justify-center items-center '>
          <div>
            <h1 
            className='text-2xl font-bold'>Mobile Phone Verification
            </h1>

            <p 
            className='text-xs'>Enter the 4-digit Verification code that was sent to your phone number.
            </p>

            <input 
            type="text" 
            value={otp}
            onChange={(e)=>setOtp(e.target.value)}
            
            />
          </div>
        </div>
      </div>

    </main>
  )
}

export default OtpForm