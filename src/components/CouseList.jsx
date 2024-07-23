import { Link } from "react-router-dom";
import branding from '../assets/branding.png'
import course1 from '../assets/course1.png'
import courseDataJSON from '../course.json'
import { useState } from "react";

function CouseList() {

    const [courseData, setCourseData] = useState([]);

    useState(()=> {
        setCourseData(courseDataJSON)
    })
  return (
    <main className="bg-[#D2E3C8] text-black h-screen w-full">
        <h1 className="text-4xl font-extrabold text-center py-5">Chai aur Code</h1>

        {/* Branding Logo  */}
        <Link to={'https://chaicode.com/'} target='_blank'>
            <img 
            className='absolute bottom-10 right-10 rounded-lg'
            src={branding}  
            width={'100px'} 
            alt="branding.png" 
            />
        </Link>
        

        <div className="bg-[#F9F7F7] min-h-3.5 w-2/3 ml-5 p-4 rounded-lg"> 
            <div>
                <h1 className="text-2xl text-[#313131]">Manage Bundle</h1>
                <p className="text-sm text-[#4B4747]">Change orders of the products based on priorty</p>
            </div>

            {courseData && courseData.map((course)=> (
                <div 
                key={course.id}
                className="bg-[#F7F7F7] shadow-[10px_10px_60px_-15px_rgba(0,0,0,0.3)] border border-blue-200  my-3 flex flex-row justify-between w-5/6 h-16 p-3 items-center rounded-md">

                <div className=" pl-3 h-auto w-auto flex flex-row items-center gap-4 text-sm">
                    <img 
                    className="w-24 rounded-lg "
                    src= {course.picture} 
                    alt="courseLogo" 
                    />

                    <h1 className="">{course.title}</h1>
                </div>

                <div className="flex flex-row gap-3 text-sm">
                    <p>{course.price}</p>
                    <p
                    className=" text-center text-sm w-[82px] h-[26] bg-[#DBFFCE] rounded-sm border border-[#7e7e7e46]"
                    >{course.type}</p>
                </div>
            </div>
            
            ))

            }
            
           

        </div>

    </main>
  )
}

export default CouseList