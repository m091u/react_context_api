import { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

//
export const UserContextProvider = (props) => {
  const [username, setUsername] = useState("bob89");
  const [age, setAge] = useState(null);

  const multipleValues = {
    usernameState: [username, setUsername],
    ageState: [age, setAge],
  };
  
  return (
    <UserContext.Provider value={multipleValues}>
      {props.children}
    </UserContext.Provider>
  );
};
