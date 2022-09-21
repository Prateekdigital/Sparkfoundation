import React from 'react'
import { useState } from 'react'
import { nanoid } from "nanoid";
import "../Component/transfer.css"
import data from "../mock-data.json";

const Transfer = () => {

  const [contacts , setContacts] = useState(data)
 
  const [addFormData, setAddFormData] = useState({
    FullName: "",
    email: "",
    Account: "",
    Amount: "",
  });
  
   const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
   };

   const handleAddFormSubmit = (event) => {
    alert("Your transaction has been successful")
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      FullName: addFormData.FullName,
      email: addFormData.email,
      Account: addFormData.Account,
      Amount: addFormData.Amount,
    }
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

};
  return (
    
    <div className='Transfer_container' >
     <div className="content_text">
        <h4 className='Form_heading'>Name: Prateek Nimborkar</h4>
        <h4 className='Form_heading'>Account Number: 00125454588</h4> 
     </div>
     <h4 className='Form_heading'>Transfer Your Money</h4>
     <form onSubmit={handleAddFormSubmit }>
        <label>Name :</label>
        <input 
           type="text" 
           name='FullName'
           placeholder='Enter Receiver Name'
           required ="required"
           onChange={handleAddFormChange}
        />
        <br />
        <label>Email :</label>
        <input 
           type="text" 
           name='email'
           placeholder='Enter Receiver Email'
           required ="required"
           onChange={handleAddFormChange}
        />
<br />
         <label>Account :</label>
        <input 
           type="text" 
           name='Account'
           placeholder='Account'
           required ="required"
           onChange={handleAddFormChange}
        />
<br />
       <label>Amount :</label>
        <input 
           type="text" 
           name='Amount'
           placeholder='Enter Amount'
           required ="required"
           onChange={handleAddFormChange}
        />
         <button type="submit">Send Money</button>

     </form>

        <table>
          <thead>
             <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Account Number</th>
               <th>Transfer Amount</th>
             </tr>
          </thead>
          
          {
            contacts.map((contact)=>{
             return <tr>
                 <td>{contact.FullName}</td>
                 <td>{contact.email}</td>
                 <td>{contact.Account}</td>
                 <td>{contact.Amount}</td>
            </tr>
            })
          } 
         
        </table>
    </div>
   );

        }
      
export default Transfer;