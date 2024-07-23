import React, { useEffect, useRef, useState } from 'react'


function OtpForm() {
  const validOTP = 1234;
  const otpLength = 4
  const [otp, setOtp] = useState(new Array(otpLength).fill(''))

  const inputRefs = useRef([]);

  const newOTP = [...otp]
  const combinedOTP = newOTP.join('')
  console.log(combinedOTP)
  // console.log(otp);

  useEffect(()=> {
    if(inputRefs.current[0]){
      inputRefs.current[0].focus()
    }
  }, [])


  const otpVerification = () => {
    if(combinedOTP === '1234'){
      console.log('login successful');
    } else{
      console.log('invalid otp');
    }
  }
  // input handle change functionality
  const handleChange = (index, e) => { 
    const value = e.target.value;
    if(isNaN(value)) return;

    const newOtp = [...otp];
    console.log(newOtp);
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp)

    const combinedOtp = newOtp.join('')
    console.log(combinedOtp);


    // Move to next input if current field is filled
    if(value && index < otpLength -1 && inputRefs.current[index + 1] ){
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index, e) => { 
    if(e.key == 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index -1]){
      inputRefs.current[index - 1].focus()
    }
  }

  const handleClick = () => { }
  

  return (
    <main className='bg-[#3F72AF] min-h-screen ' >
      <h1 className='text-4xl font-extrabold text-center py-10'>Chai aur Code</h1>
      <div className='flex flex-col justify-center items-center'>

      <div className='bg-white text-black py-5 px-8 rounded-lg shadow-2xl h-80 w-1/3 text-center'>
        <h1 className='text-2xl pb-3 font-bold'>Mobile Phone Verification</h1>

        <p className='text-sm text-[#BFBFBF] pb-5'>Enter the 4-digit verification code that was sent to your phone number.</p>
    {
      otp.map((value, index)=> {
        return <input 
        className='w-[50px] h-[50px] m-[5px] 
        text-center text-[1rem] rounded-sm bg-[#DBE2EF] outline-blue-400 '
        key={index}
        type="text" 
        ref={((input)=> inputRefs.current[index] = input)}
        value={value}
        onChange={((e)=> handleChange(index, e))}
        onClick={handleClick}
        onKeyDown={((e)=> handleKeyDown(index, e))} 

        />
      })
    }

    <div>
      <button
      
      onClick={otpVerification}
      className='bg-[#112D4E] text-white w-[14.5rem] h-12 rounded-md my-4'
      >Verify Account</button>

      <p className='text-sm text-[#BFBFBF]'> Didn’t receive code? <a href="#" className='text-blue-800 underline'>Resend</a> </p>
    </div>
      </div>
      </div>

    </main>
  )
}

export default OtpForm