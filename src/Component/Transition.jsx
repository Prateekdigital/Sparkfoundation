import { useState } from 'react'
import data from "../mock-data.json";
import { nanoid } from "nanoid";
import "../Component/transition.css"
const Transition = () => {

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
    setContacts(newContacts)};

  return (
    <div className='trans_container'>

    <h3>Your Last Five transitions</h3>
       <table>
          <thead>
             <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Account Number</th>
               <th>Transfer Amount</th>
             </tr>
          </thead>

          <tbody>
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
          </tbody>
        </table>
    </div>
  )
}

export default Transition
