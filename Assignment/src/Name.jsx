import React from 'react';
import UserCard from './UserCard.jsx';

function App() {
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    online: true,
  };

  return (
    <div>
      <UserCard {...user} />
    </div>
  );
}

export default App;