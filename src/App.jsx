import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from "./Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
import SetCar from './SetCar.jsx'
import ToDoList from './ToDoList.jsx'

function App() {

  const fruits = [{id:1, name: 'Apple', cal: "Apple"}, 
                  {id:2, name: "orange", cal: 45}, 
                  {id:3, name: "banana", cal: 105},
                  {id:4, name: "coconut", cal: 159}];
  return(
    <>
        <ToDoList/>
        <SetCar/>
        
        <ColorPicker/>

        <Counter/>
        <MyComponent/>

        {/* <ProfilePicture/> */}

        { fruits.length > 0 && <List items={fruits} category="Fruits"></List>}




        <UserGreeting isLoggedIn={true}/>


        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="Larry"/>



      <Button/>
      <Card/>
      <Header/>
      <Footer/> 
      <Food></Food>
    </>
  );
}

export default App
