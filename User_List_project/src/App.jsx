import react, { useState, useEffect } from "react";
import User from "./User";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers)
      .finally(() => {
        [setIsLoading(false)];
      });
  }, []);
  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => {
            // return <User key={user.id} name={user.name} email={user.email} city={user.email} />;
            return <User key={user.id} {...user} />;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
