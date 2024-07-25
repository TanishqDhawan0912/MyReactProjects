import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
<<<<<<< HEAD
  return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>;
=======
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
>>>>>>> f1e040b (miniContext added)
};

export default UserContextProvider;
