import './App.css';

// import Header from './Components/ders-01/Header';
// import Components from './Components/ders-01/Components';
// import User from "./Components/ders-02/User";
import State from "./Components/ders-03/State";
import Counter from "./Components/ders-03/Counter";
import InputExample from "./Components/ders-03/InputExample";
import Inputs from "./Components/ders-03/Inputs";

/*const friendsName = [
  {
    id: 1,
    name: 'Furkan'
  },
  {
    id: 2,
    name: 'Gizem'
  },
  {
    id: 3,
    name: 'Hilal'
  },
  {
    id: 4,
    name: 'Kader'
  },
];*/

function App() {
  return (
    <div>
      
      {/* ders-01 */}
      {/*
        <Header />
        <Components />
      */}

      {/* ders-02 */}
      {/*
        <User 
        name="Zehra" 
        surname="İkizler" 
        age={21} 
        isLoggedIn={true} 
        friends={friendsName}
        address={
          {
            title: "Akçaabat/Trabzon",
            zip: 1234
          }
        }
        />
      */}

        {/* ders-03 */}
        <State />
        <Counter />
        <InputExample />
        <Inputs />

    </div>
  );
}

export default App;
