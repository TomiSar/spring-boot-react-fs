/* eslint-disable no-unused-vars */
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import {
  FirstComponent as FC,
  SecondComponent as SC,
} from './components/MyComponent';
import MC from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
import Employee from './components/Employee';
import User from './components/User';
import EventHandling from './components/EventHandling';
import ConditionalRendering from './components/ConditionalRendering';

function App() {
  // const student = {
  //   firstName: 'Chuck',
  //   lastName: 'Norris',
  //   email: 'senseioftheworld@com',
  // };

  return (
    <div className='App'>
      {/* <h1>Hello from React</h1>      
      <Welcome name='Chuck' />
      <Greeting firstName='Chuck' lastName='Norrris' />
      <FC />
      <SC />
      <MC /> 
      <HelloWorld />
      <Student
        firstName={student.firstName}
        lastName={student.lastName}
        email={student.email}
      />

      <Student
        firstName='Steven'
        lastName='Seagal'
        email='mrponytail@sensei.com'
      /> 
      <Employee /> 
      <User />
      <EventHandling /> */}
      <ConditionalRendering />
    </div>
  );
}

export default App;
