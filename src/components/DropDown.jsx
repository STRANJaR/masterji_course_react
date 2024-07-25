/* eslint-disable react/prop-types */
import { faArrowDown, faArrowUp, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function DropDown({id, moveToTopHandler, removeCourse}) {
  return (
    <div className=''>
        <ul className='bg-[white]  flex flex-col gap-4 absolute top-[2rem] border-gray-600 z-20 right-[-10rem] w-38 p-2 rounded-md shadow g'>

            <li 
            onClick={moveToTopHandler}
            className="hover:text-gray-700 transition-colors">
            <FontAwesomeIcon icon={faArrowUp} /> Move To Top
            </li>

            <li className="hover:text-gray-700 transition-colors">
              <FontAwesomeIcon icon={faArrowDown} /> Move To Bottom
            </li>

            <li 
            data-id={id}
            onClick={removeCourse}
            className="hover:text-gray-700 transition-colors">
              <FontAwesomeIcon icon={faTrashCan} style={{color: "#ff142c",}} />  Remove
            </li>

        </ul>
    </div>
  )
}

export default DropDown