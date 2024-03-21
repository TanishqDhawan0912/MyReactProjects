import user from "./user.json";
// import { Usercard } from "./Usercard";
import {UsercardClass} from "./UsercardClass";
function App() {
  return (
    // <Usercard
    //   name={user.name}
    //   age={user.age}
    //   phone={user.phone}
    //   address={user.address}
    // />
    < UsercardClass
      name={user.name}
      age={user.age}
      phone={user.phone}
      address={user.address}
    />    
  )
}

export default App;
