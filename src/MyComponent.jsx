// SetCar.jsx也是在讲MyComponent，讲了怎么改一个variable里面的各个参数
import React, {useState} from 'react';

//onChange = event handler used primarily with form elements
//           ex. <input>, <textarea>, <select>, <radio>
//           Triggers a function every time the value of the input changes.


function MyComponent()
{
  //3/9
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const [foods, setFoods] = useState(["Apple","Orange","Banana"]);
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

  // 3/9
  function handleAddCar(){
    const newCar = {year: carYear, 
                    make: carMake,
                    model: carModel};
    setCars(c => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handleRemoveCar(index){
    setCars(c => c.filter((_, i) => i !== index));
  }
  function handleYearChange(event){
    setCarYear(event.target.value);
  }
  function handleMakeChange(event){
    setCarMake(event.target.value);
  }
  function handleModelChange(event){
    setCarModel(event.target.value);
  }


  // 3/8/2024
  function handleAddFood(){
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods(f => [...f, newFood]);
  }
function handleRemoveFood(index){
  setFoods(foods.filter((_, i) => i !==index))
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
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => 
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>)}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange}/><br />
      <input type="text" value={carMake} onChange={handleMakeChange} 
              placeholder='Enter car make'/><br />
      <input type="text" value={carModel} onChange={handleModelChange} 
              placeholder='Enter car model'/><br />
      <button onClick={handleAddCar}>Add Car</button>




      <h2>List of food</h2>
      <ul>
        {foods.map((food, index) => 
        <li key={index} onClick={() => handleRemoveFood(index)}>
          {food}
        </li>)}
        <input type="text" id="foodInput" placeholder='Enter food name'/>
        <button onClick={handleAddFood}>Add Food</button>
      </ul>


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