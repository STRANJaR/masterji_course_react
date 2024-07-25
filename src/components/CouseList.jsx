import { Link } from "react-router-dom";
import branding from '../assets/branding.png'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import courseDataJSON from '../course.json'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./DropDown";


function CouseList() {

    const [courseData, setCourseData] = useState([]);
    const [courseBox, setCourseBox] = useState(courseDataJSON);

    useState(()=> {
        setCourseData(courseDataJSON)
    }, [courseData, courseBox])

    // handle dragEnd for DragDropContext
    const handleDragEnd = (result) => {
        if(!result.destination) return;

        const newCourseBox = Array.from(courseBox);
        const [draggedItem] = newCourseBox.splice(result.source.index, 1);
        newCourseBox.splice(result.destination.index, 0, draggedItem);
        setCourseBox(newCourseBox)
        console.log(courseBox)
        console.log(newCourseBox);

        const updatedData = newCourseBox.map(data => (
            {
                ...data,
                isShow: false,
                isTop: false,
                isBottom: false
            }
        ))

        console.log(updatedData);
        setCourseBox(updatedData)
    }

    // const handleMoreButton = (e) => {
    //     console.log(e.target.dataset);
    // }

    const handleDropDown = (e) => {
        const { dataset } = e.target
        e.target.dataset
        console.log(dataset);

        setCourseBox((prevCourseData)=> (
            prevCourseData.map(data => (
                data.id == dataset.id ? ({...data, isShow: !data.isShow}) : data
            ))
        ))
    }

    // Move to top handler 
    const moveToTopHandler = () => {
        // const { dataset } = e.target
        // e.target.dataset

        // setCourseBox((prevCoursePosition)=> (
        //     prevCoursePosition.filter(data => (
        //         data.id == dataset.id ? (
        //             {
        //                 data,
        //                 isTop: !data.isTop
        //             }
        //         ) : data
        //     ))
        // ))
        // console.log(courseBox);


    }

    const removeCourse = (e) => {
        const newCourseBox = [...courseBox];
        const { dataset } = e.target
        e.target.dataset


        newCourseBox.map(course => (
            course.id == dataset.id ? 
            setCourseBox(courseBox.filter(course => course.id != dataset.id )) 
            : course
        ))

        // newCourseBox.splice(dataset.id, 1)
        // setCourseBox(
        //     newCourseBox.filter(course => course.length)
        // )
        console.log(dataset.id)
    }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
        
    <main className="bg-[#D2E3C8] text-black h-screen w-full">
        <h1 className=" text-[#4F6F52] text-4xl font-extrabold text-center py-5">Chai aur Code</h1>

        {/* Branding Logo  */}
        <Link to={'https://chaicode.com/'} target='_blank'>
            <img 
            className='absolute bottom-10 right-10 rounded-lg'
            src={branding}  
            width={'100px'} 
            alt="branding.png" 
            />
        </Link>
        

            <div className="bg-[#F9F7F7] shadow-md min-h-3.5 w-2/3 ml-5 p-4 rounded-lg"> 
                    <div>
                        <h1 className="text-2xl font-bold text-[#313131]">Manage Bundle</h1>
                        <p className="text-sm text-[#4B4747]">Change orders of the products based on priorty</p>
                    </div>

                <div className="pt-5">
                    <Droppable droppableId="course">
                        {(provided)=> (
                            <div ref={provided.innerRef} {...provided.droppableProps}>


                                {courseData && courseBox.map(({id, title, price, type, picture, isShow}, index)=> (

                                    <Draggable
                                    key={id}
                                    draggableId={id.toString()}
                                    index={index}
                                    >
                                    {(provided)=> (
                                    <div 
                                        ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}
                                        // key={course.id}
                                        className="bg-[#F7F7F7] relative shadow-[10px_10px_60px_-15px_rgba(0,0,0,0.3)] border border-blue-200  my-2 flex flex-row justify-between w-5/6 h-16 px-3 items-center rounded-md">
            
                                        <div className="  w-auto flex flex-row items-center text-sm">
                                        <svg width="40px" height="137px" viewBox="-2.5 -2.5 30.00 30.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#696969" strokeWidth="0.00025" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.2"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M9.5 8C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5C8.67157 5 8 5.67157 8 6.5C8 7.32843 8.67157 8 9.5 8ZM9.5 14C10.3284 14 11 13.3284 11 12.5C11 11.6716 10.3284 11 9.5 11C8.67157 11 8 11.6716 8 12.5C8 13.3284 8.67157 14 9.5 14ZM11 18.5C11 19.3284 10.3284 20 9.5 20C8.67157 20 8 19.3284 8 18.5C8 17.6716 8.67157 17 9.5 17C10.3284 17 11 17.6716 11 18.5ZM15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8ZM17 12.5C17 13.3284 16.3284 14 15.5 14C14.6716 14 14 13.3284 14 12.5C14 11.6716 14.6716 11 15.5 11C16.3284 11 17 11.6716 17 12.5ZM15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z" fill="#474747"></path> </g></svg>
                                            <img 
                                            className="w-24 rounded-md "
                                            src= {picture} 
                                            alt="courseLogo" 
                                            />
            
                                        <h1 className="pl-4">{title}</h1>
                                    </div>
            
                                    <div className="flex flex-row gap-3 text-sm items-center">
                                        <p className="text-left items-start">{price}</p>
                                        <p
                                        className=" text-center text-sm w-[82px] h-[26] bg-[#DBFFCE] rounded-md border border-[#7e7e7e46]"
                                        >{type}</p>

                                        <span className=" rounded-full hover:bg-slate-300">
                                        
                                            <FontAwesomeIcon 
                                                onClick={handleDropDown}
                                                className="w-[20px] h-[15px] rounded-full p-1"
                                                data-id={id}
                                                icon={faEllipsisVertical}
                                            />

                                        </span>
                                        {isShow && 
                                            <DropDown 
                                            id={id}
                                            moveToTopHandler={moveToTopHandler} 
                                            removeCourse={removeCourse}
                                            /> }

                                    </div>
                                    </div>
                                    )}
                                    </Draggable>
                                
                                ))
                                }
                                {provided.placeholder}
                            </div>

                        )}
                    </Droppable>
                </div>
                    
                    

            </div>
    </main>
    </DragDropContext>

  )
}

export default CouseList