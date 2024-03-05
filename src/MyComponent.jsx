import React, {useState} from 'react';

//onChange = event handler used primarily with form elements
//           ex. <input>, <textarea>, <select>, <radio>
//           Triggers a function every time the value of the input changes.


function MyComponent()
{

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");

  const updateName = () => {
    setName("Spongebob");
  }
  const incrementAge = () =>
  {
    setAge(age + 1);
  }

  function handleNameChange(event)
  {
    setName(event.target.value);
  }

  function handleCommentChange(event){
    setComment(event.target.value);
  }

  function handlePaymentChange(event){
    setPayment(event.target.value);
  }

  return(
    <div>
      <input value={name} onChange={handleNameChange} type='number' />
      <p>Name: {name}</p>
      <button onClick={updateName}>Set name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>set age</button>

      <textarea value={comment} onChange={handleCommentChange} 
      id="" cols="30" rows="10"
      placeholder='Enter delivery instructions'>
      </textarea>
      <p>Comment: {comment}</p>

      <select  value={payment} onChange={handlePaymentChange} name="" id="">

        <option value="">select an option</option>
        <option value="VISA"> VISA</option>
        <option value="Mastercard"> MasterCARD</option>

      </select>
      <p>Payment: {payment}</p>

    </div>
  )
}
export default MyComponent