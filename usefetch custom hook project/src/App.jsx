import { useState } from "react";
import { useFetch } from "./useFetch";

const URLs = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

function App() {
  const [url, setUrl] = useState(URLs.USERS);

  const { data, isLoading, isError } = useFetch(url);

  return (
    <>
      <div>
        <label htmlFor="">
          <input
            type="radio"
            checked={url === URLs.USERS}
            onChange={() => setUrl(URLs.USERS)}
          />
          Comments
        </label>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        <pre>JSON.stringify(data,null,2)</pre>
      )}
    </>
  );
}

export default App;
