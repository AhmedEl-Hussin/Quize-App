import { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

export function Modals() {
  const [showModal, setShowModal] = useState(false);

    return (
        
        <>
              <div className="d-flex justify-end">
        <TERipple rippleColor="white">

          <button type="button" className="border-2 rounded-4 py- px-2  mt-5 me-4" onClick={() => setShowModal(true)} >
            <i className="fa-solid fa-plus bg-[black] text-white rounded-4 px-0.5 mr-1 text-xs"></i>
            Add Group
          </button>

        </TERipple>
      </div>

      <TEModal show={showModal} setShow={setShowModal}>
        
        <TEModalDialog>
          
          <TEModalContent>
            
            {/* ############# Modal title ############# */}
            <TEModalHeader>
              {/* ############# Modal title #############*/}
              <h5 className="text-lg  font-bold leading-normal text-neutral-800 ">
                Set up a new Group
              </h5>

              {/* ############# Close button ############# */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            
            <div className="w-full h-0.5 bg-[#dcdbdb]"></div>

            {/* ############# Modal body ############# */}
            <TEModalBody className="mt-3">

              <div>
                <div className="bg-[#ffeddf]  position-absolute top-6 rounded-3 px-1">
                  <h6 className="mt-2 pb-2.5 text-sm">Group Name</h6>
                </div>
                <input type="text" className="form-control border-2 border-gray-300 text-center" />
              </div>
            
              <div className="mt-4">
                <div className="bg-[#ffeddf] position-absolute top-10 mt-5 rounded-3 px-1">
                  <h6 className="mt-2 pb-2 text-sm">List Students</h6>
                </div>
                <select className='form-select border-2 border-gray-300'>
                  <option value="" className='text-muted'>1</option>
                  <option value="" className='text-muted'>2</option>
                  <option value="" className='text-muted'>3</option>
                </select>
              </div>
            </TEModalBody>
            
            <TEModalFooter>

              {/* ############# to Close Modal ############# */}
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="bg-danger btn text-white"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className=" btn ms-2 bg-[#ffeddf] hover:bg-[#ffeddf]"
                >
                  Add Group
                </button>
              </TERipple>
            </TEModalFooter>
          
          </TEModalContent>

        </TEModalDialog>

      </TEModal>
        </>
    )
}

export default Modals