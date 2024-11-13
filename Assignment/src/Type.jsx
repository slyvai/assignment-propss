import React from 'react';

// Component that takes a string prop
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Component that takes a number prop
function Age(props) {
  return <p>You are {props.age} years old.</p>;
}

// Component that takes a boolean prop
function Status(props) {
  return <p>{props.online ? 'Online' : 'Offline'}</p>;
}

// Component that takes an array prop
function FruitList(props) {
  return (
    <ul>
      {props.fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

// Component that takes an object prop
function UserCard(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>Age: {props.user.age}</p>
      <p>Email: {props.user.email}</p>
    </div>
  );
}

// Main App component
function App() {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  };

  return (
    <div>
      <Greeting name="Alasasa" />
      <Age age={225} />
      <Status online={true} />
      <FruitList fruits={fruits} />
      <UserCard user={user} />
    </div>
  );
}

export default App;
  