// import React, { useEffect } from 'react'
// import { useState } from "react";
// import axios from "axios";
 import "./multiForm.css";

// import { v4 as uuidv4 } from 'uuid';


// export default function MultiForm() {


// // const nodemailer = require('nodemailer');
// const prevBtns = document.querySelectorAll(".btn-prev");
// const nextBtns= document.querySelectorAll(".btn-next");
// const progress= document.getElementById("progress");
// const formSteps= document.querySelectorAll(".form-step");
// const progressSteps = document.querySelectorAll(".progress-step");
// let formStepsNum=0;


// nextBtns.forEach(btn=>{
//     btn.addEventListener("click",()=>{
//         formStepsNum++;
//         updateFormSteps();
//         updateProgressBar();
//     });

// });

// prevBtns.forEach(btn=>{
//     btn.addEventListener("click",()=>{
//         formStepsNum--;
//         updateFormSteps();
//         updateProgressBar();

    
//     });

// });

// function updateFormSteps(){
//     formSteps.forEach((formStep)=>{
//         formStep.classList.contains("form-step-active")  && 
//         formStep.classList.remove("form-step-active");
//     });

//     formSteps[formStepsNum].classList.add("form-step-active");
// } 




// function updateProgressBar(){
//     progressSteps.forEach((progressStep,idx)=>{

//         if(idx<formStepsNum+1){
//             progressStep.classList.add("progress-step-active");
//         }
//         else{
//             progressStep.classList.remove("progress-step-active");
//         }

//     });


// const progressActive = document.querySelectorAll(".progress-step-active");

//     progress.style.width =
//     ((progressActive.length-1)/(progressSteps.length -1))*100 +"%";
// }



//     const [_id,set_id] =useState("")
//     const [designation,setdesignation] =useState("")
//     const [email,setEmail] =useState("")
//     const [phone,setPhone] =useState("")
//     const [stat,newstat]=useState("")
//     const [district,newdistrict]=useState("")
//     const [address,setaddress]=useState("")
//     const [org_name,setorg_name]=useState("")
//     const [org_mail,setorg_mail]=useState("")
//     const [org_head,setorg_head]=useState("")
//     const [org_add,setorg_add]=useState("")
//     const [accused_name,setaccused_name]=useState("")
//     const [accused_des,setaccused_des]=useState("")
//     const [accused_head,setaccused_head]=useState("")
//     const [accused_rel,setaccused_rel]=useState("")
//     const [accused_desc,setaccused_desc]=useState("")
  
//     const [error,setError] =useState(false)
  
//     const handleSubmit= async(e)=>{
//       set_id(uuidv4());

//         e.preventDefault()
//         setError(false)
//        try{ 
       
//         const res= await axios.post("http://localhost:5000/server/complains/multiForm",{
//           _id,
//           designation,
//           phone,
//           stat,
//           district,
//           address,
//           org_name,
//           org_mail,
//           org_head,
//           org_add,
//           accused_name,
//           accused_des,
//           accused_head,
//           accused_rel,
//           accused_desc,
//           email,
//         })
//         const response = await axios.post('http://localhost:5000/server/send-mail', { email,_id });
//         res.data && window.location.replace("/landingPage")
//       }
//         catch(err){
//           console.log(err)
//           setError(true)
//         }
       
//       }  

//   return (
    
//     <>
//  <div className='bgc'>

//     <form action="#" className="form">
//     <h2>Complaint Form</h2>

//     <div className="progressbar">
//       <div className="progress" id="progress" />
//       <div className="progress-step progress-step-active" />
//       <div className="progress-step" />
//       <div className="progress-step" />
//     </div>
    
//     <div className="form-step form-step-active">
//       <h3>Information About Complaintant</h3>
//       <div className="input-grp">
//         <label>Designaton:</label>
//         <input type="text" placeholder="Enter Your Job Title"  onChange={(e) =>setdesignation(e.target.value)} />
//       </div>
//       <div className="input-grp">
//         <label>Phone</label>
//         <input type="number" placeholder="Enter Your Phone"   onChange={(e) =>setPhone(e.target.value)}/>
//       </div>
//       <div className="input-grp">
//         <label>Email: </label>
//         <input type="email" placeholder="Enter your Email here"  onChange={(e) =>setEmail(e.target.value)} />
//       </div>
//       <div className="input-grp">
//         <label>State: </label>
//         <select>
//           <option onChange={(e) =>newstat(e.target.value)} >State</option>
//           <option value="Andhra Pradesh">Andhra Pradesh</option>
//           <option value="Andaman and Nicobar Islands">
//             Andaman and Nicobar Islands
//           </option>
//           <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//           <option value="Assam">Assam</option>
//           <option value="Bihar">Bihar</option>
//           <option value="Chandigarh">Chandigarh</option>
//           <option value="Chhattisgarh">Chhattisgarh</option>
//           <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
//           <option value="Daman and Diu">Daman and Diu</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Lakshadweep">Lakshadweep</option>
//           <option value="Puducherry">Puducherry</option>
//           <option value="Goa">Goa</option>
//           <option value="Gujarat">Gujarat</option>
//           <option value="Haryana">Haryana</option>
//           <option value="Himachal Pradesh">Himachal Pradesh</option>
//           <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//           <option value="Jharkhand">Jharkhand</option>
//           <option value="Karnataka">Karnataka</option>
//           <option value="Kerala">Kerala</option>
//           <option value="Madhya Pradesh">Madhya Pradesh</option>
//           <option value="Maharashtra">Maharashtra</option>
//           <option value="Manipur">Manipur</option>
//           <option value="Meghalaya">Meghalaya</option>
//           <option value="Mizoram">Mizoram</option>
//           <option value="Nagaland">Nagaland</option>
//           <option value="Odisha">Odisha</option>
//           <option value="Punjab">Punjab</option>
//           <option value="Rajasthan">Rajasthan</option>
//           <option value="Sikkim">Sikkim</option>
//           <option value="Tamil Nadu">Tamil Nadu</option>
//           <option value="Telangana">Telangana</option>
//           <option value="Tripura">Tripura</option>
//           <option value="Uttar Pradesh">Uttar Pradesh</option>
//           <option value="Uttarakhand">Uttarakhand</option>
//           <option value="West Bengal">West Bengal</option>
//         </select>
//       </div>
//       <div className="input-grp">
//         <label>District</label>
//         <input type="text" placeholder="Enter District"  onChange={(e) =>newdistrict(e.target.value)}/>
//       </div>
//       <div className="input-grp">
//         <label>Address: </label>
//         <input type="text" placeholder="Enter Address"  onChange={(e) =>setaddress(e.target.value)}/>
//       </div>
//       <a href="#" className="btn btn-next ml-auto width-50 ">
//         Next
//       </a>
//     </div>


//     <div className="form-step ">
//       <h3>Information About Oraganization</h3>
//       <div className="input-grp">
//         <label>Name: </label>
//         <input
//           type="text"
//           placeholder="Enter Name of Organization"
          
//           onChange={(e) =>setorg_name(e.target.value)}
//         />
//       </div>
//       <div className="input-grp">
//         <label>Email: </label>
//         <input
//           type="email"
//           placeholder="Enter Email of Oraganization"
//           onChange={(e) =>setorg_mail(e.target.value)}
          
//         />
//       </div>
//       <div className="input-grp">
//         <label>Head of Oraganization: </label>
//         <input type="text" placeholder="Enter Name"  onChange={(e) =>setorg_head(e.target.value)}/>
//         <br />
//       </div>
//       <div className="input-grp">
//         <label>Address: </label>
//         <input
//           type="text"
//           placeholder="Enter Address of Organazation"
          
//           onChange={(e) =>setorg_add(e.target.value)}
//         />
//       </div>
//       <div className="btn-grp">
//         <a href="#" className="btn btn-prev pn">
//           Previous
//         </a>
//         <a href="#" className="btn btn-next pn">
//           Next
//         </a>
//       </div>
//     </div>


//     <div className="form-step ">
//       <h3>Information About Accused</h3>
//       <div className="input-grp">
//         <label>Name: </label>
//         <input type="text" placeholder="Enter Name of Accused"   onChange={(e) =>setaccused_name(e.target.value)}/>
//       </div>
//       <div className="input-grp">
//         <label>Designaton:</label>
//         <input type="text" placeholder="Enter job title"   onChange={(e) =>setaccused_des(e.target.value)}/>
//       </div>
//       <div className="input-grp">
//         <label>Head of Oraganization: </label>
//         <input type="text" placeholder="Enter Name"   onChange={(e) =>setaccused_head(e.target.value)}/>
//         <br />
//       </div>
//       <div className="input-grp">
//         <label>Working Relationship with Accused:</label>
//         <input
//           type="text"
//           placeholder="Working Relatioship with Accused"
           
//           onChange={(e) =>setaccused_rel(e.target.value)}
//         />
//         <br />
//       </div>
//       <div className="input-grp">
//         <label>Description: </label>
//         <br />
//         <textarea
//           rows={5}
//           cols={45}
//           placeholder="Brief Description about your complaint"
//           defaultValue={""} 
//           onChange={(e) =>setaccused_desc(e.target.value)}
//         />
//       </div>
//       <div className="btn-grp">
//         <a href="#" className="btn btn-prev pn">
//           Previous
//         </a>
       
//           <button className="btn" onClick={handleSubmit} >Submit</button>
//              </div>
//     </div>


//   </form> 


//     </div>
//     </>
//   )
// }
import React from "react";
import { useState } from "react";
import Page0 from "./page0";
import Page1 from "./page1";
import Page2 from "./page2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Form (){
  const [page,setPage]=useState(0); 
  const formTitle=["Information About Complaintant","Information About Acused","Description About Complaint"] 
   const [formData, setFormData]=useState({
    Name:"",
    Designation:"",
    Phone:"",
    Email:"",
    State:"",
    District:"",
    Address:"",
    NameA:"",
    DesignationA:"",
    Head:"",
    Relation:"",
    Desc:"",
   })
const pageDisplay=()=>{

  // const handleShowToast = () => {
  //   toast.success('This is a success message!');
  // };

  if(page===0){
    return <Page0 formData={formData} setFormData={setFormData}/>
  }
  else if(page===1){
    return <Page1 formData={formData} setFormData={setFormData}/>
  }
  else return<Page2 formData={formData} setFormData={setFormData}/>
}

  return(
    <div className="form">
      <div className="progressbar rounded-2xl ">
        <div className="rounded-2xl" style={{width: page===0?"33.3%":page===1?"66.6%":"100%"}}></div>
      </div>
      <div className="header text-3xl font-bold my-4 text-teal-50"><h1> {formTitle[page]}</h1></div>

      <div className="form-container">
        <div className="content">{pageDisplay()}</div>
        <div className="footer mt-auto">
        <button disabled={page===0}  onClick={()=>{
          setPage((curPage)=>curPage-1)
        }}>Previous</button>
        <button disabled={page==formTitle.length-1}
         onClick={() => {
          if (page === formTitle.length - 1) {
            alert("FORM SUBMITTED");
            console.log(formData);
          } else {
            setPage((currPage) => currPage + 1);
          }
        }}
        >{page === formTitle.length - 1 ? "Submit " : "Next"}</button>
        </div>
        
      </div>
      <page0/>
    </div>
  )
}
export default Form;