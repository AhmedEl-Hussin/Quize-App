import { useState } from "react";
import {TERipple,TEModal,TEModalDialog,TEModalContent,TEModalHeader,TEModalBody,TEModalFooter,} from "tw-elements-react";


export default function Groups() {

  const groups=[
    {id:'1', GroupName:"JSB Angular",NumberOfStudent:10},
    {id:'2', GroupName:"JSB React",NumberOfStudent:20},
    {id:'3', GroupName:"JSB HTML",NumberOfStudent:30},
    {id:'4', GroupName:"JSB CSS",NumberOfStudent:40},
    {id:'5', GroupName:"JSB Bootstrap",NumberOfStudent:50},
    {id:'6', GroupName:"JSB JavaScript",NumberOfStudent:60},
    {id:'7', GroupName:"JSB jQuery",NumberOfStudent:70},
    {id:'8', GroupName:"JSB Tailwind",NumberOfStudent:80},
    {id:'9', GroupName:"JSB Angular",NumberOfStudent:90},
    {id:'10', GroupName:"JSB Angular",NumberOfStudent:100},
  ]

  const [modelState, setModelState] = useState("colse");
  const handleClose = () => setModelState("colse");


  // *************** to show add model ***************
  const showAddModel = ()=>{
    setModelState("add-model");
  }

  // *************** to show add model ***************
  const showUpdateModel = ()=>{
    setModelState("update-model");
  }

  // *************** to show add model ***************
  const showDeleteModel = ()=>{
    setModelState("delete-model");
  }

  return (
    <>

  {/* ############### this model to Add group ################ */}
    <div>
      <div className="d-flex justify-end">
        <TERipple rippleColor="white">

          <button type="button" className="border-2 rounded-4 py- px-2  mt-5 me-4" onClick={() => showAddModel()} >
            <i className="fa-solid fa-plus bg-[black] text-white rounded-4 px-0.5 mr-1 text-xs"></i>
            Add Group
          </button>

        </TERipple>
      </div>

      <TEModal show={modelState == "add-model"} setShow={handleClose}>
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
                onClick={() => handleClose()}
                aria-label="Close"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
                  onClick={() => handleClose()}
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
    </div>

  {/* ############### this model to update group ################ */}
    <div>
      <TEModal show={modelState == "update-model"} setShow={handleClose}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>

              {/* ############# Modal title #############*/}
              <h5 className="text-lg  font-bold leading-normal text-neutral-800 ">
                Update Group
              </h5>

              {/* ############# Close button ############# */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => handleClose()}
                aria-label="Close"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
                  onClick={() => handleClose()}
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
    </div>

  {/* ############### this model to delete group ################ */}
    <div>
      <TEModal show={modelState == "delete-model"} setShow={handleClose}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>

              {/* ############# Modal title #############*/}
              <h5 className="text-lg  font-bold leading-normal text-neutral-800 ">
                Delete Group
              </h5>

              {/* ############# Close button ############# */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => handleClose()}
                aria-label="Close"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

            </button>
          </TEModalHeader>

            <div className="w-full h-0.5 bg-[#dcdbdb]"></div>

            {/* ############# Modal body ############# */}
            <TEModalBody className="">
              <div className="mt-3">
                <h5 className='mt-3 fs-3 fw-bold pb-4'>Delete This Group ?</h5>
                <p className="fs-6">are you sure you want to delete this item ? if you are sure just  click on delete it</p>
              </div>
            </TEModalBody>

            <TEModalFooter>
              {/* ############# to Close Modal ############# */}
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="bg-danger btn text-white"
                  onClick={() => handleClose()}
                >
                  Close
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className=" btn ms-2 bg-[#ffeddf] hover:bg-[#ffeddf]"
                >
                  Delete Group
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>


    {/* ############### display all groups ################ */}
      <div className="p-4">

        <div className="border-2 rounded-2 p-3">
          
          <h4>Groups list</h4>

          <div className="grid md:grid-cols-2 gap-x-3 gap-y-2 mt-4 ">

            {groups.map((group , id)=> 

              <div key={id} className="flex justify-between px-3 py-2 rounded-2 border-2 border-gray-300 ">

                <div>
                  <h4>Group : {group.GroupName}</h4>
                  <span className="text-xs">No. of students :{group.NumberOfStudent}</span>
                </div>

                <div className="mt-2">
                  <button onClick={() => showUpdateModel()}>
                    <i className="fa-regular fa-pen-to-square pr-1" ></i>
                  </button>

                  <button onClick={() => showDeleteModel()}>
                    <i className="fa-solid fa-trash " ></i>
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
      
    </>
  )
}
