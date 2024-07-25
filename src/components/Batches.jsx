import { useState, useEffect } from 'react';
import batchesJSON from '../batches.json';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import '../App.css'
import branding from '../assets/branding.png'

function Batches() {
    const [batches, setBatches] = useState([])
    // const [isPublished , setIsPublished] = useState(true)
    const [query, setQuery] = useState("");

    useEffect(()=> {    
        setBatches(batchesJSON)
    },[])

    const serach_prams = Object.keys(Object.assign({}), ...batches);
    const searchBox = (batches) => {
        return batches.filter(data => (
            serach_prams.some((prams)=>(
                data[prams].toString().toLowerCase().includes(query)
            ))
        ))
    }
  return (
    <div className="bg-[#E2BBE9] border-white h-screen w-full ">

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



        <div className=" h-auto w-3/4 relative top-6 left-10 bg-white rounded-md">

                    <div className='p-4'>
                        <h1 className="text-2xl font-bold text-[#313131]">Batches</h1>
                        <p className="text-sm text-[#4B4747]">Create learner’s batch and share information at the same time.</p>
                    </div>


            <div className="bg-white text-[#4B4747] w-full h-auto ">
                <input 
                onChange={(e)=> setQuery(e.target.value)}
                type="search" 
                name='search-form'
                id='search-form'
                className='outline-none border border-[#BEBEBE] p-2 ml-3 mb-2 w-72 rounded-md'
                placeholder='Search by Title (alt+k or cmd+k)'
                />

                <button
                onClick={()=> searchBox}
                className='px-7 py-2.5 rounded-md ml-3  text-sm bg-[#6C6BAF] text-[#FFFFFF]'
                >Search</button>


                <table 
                style={{width:"100%"}}
                className=" w-full text-center text-sm">
                        <tr 
                        className="bg-gray-300">
                            <th style={{width:"30%"}}>Title</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Price</th>
                            <th>Vlidity/Expiry</th>
                            <th>Status</th>
                        </tr>
                        {batchesJSON && batches.map(batch => (
                            <tbody  
                            className=""
                            key={batch.id}>

                                <tr 
                                className=''
                                style={{height:"10px" }}>
                                    <div className='items-center justify-start flex flex-col p-4 border-r-black'>
                                        <div className='flex justify-center items-center gap-3'>
                                            <img 
                                            className='rounded-md'
                                            width={'100px'}
                                            src={batch.imageURL} alt={batch.title} />
                                            <h1>{batch.title}</h1>
                                        </div>
                                    </div>
                                    

                                    <td>{batch.start_date}</td>
                                    <td>{batch.end_date}</td>
                                    <td>{batch.price}</td>
                                    <td>{batch.expiry}</td>
                                    
                                    <div className={`flex ml-5 justify-center text-[#4B4747] text-center text-sm w-[90px] h-[26] bg-[#DBFFCE] rounded-md border border-[#4ED04B]`  }>
                                        {batch.status}
                                        
                                    </div>
                                </tr>
                            </tbody>

                        ))}
                </table>

            </div>
            
            <div>
                <div>
                    <select name="Rows per page" id="paginatePage">
                        
                    </select>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Batches