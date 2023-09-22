import { useContext } from "react";
import UserContext from "../contexts/user.context";

export const User = () => {
  const { usernameState, ageState } = useContext(UserContext);
  const [username, setUsername] = usernameState;
  const [age, setAge] = ageState;
  const handleOnChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <h2> User Page </h2>
      <>
        <label> change username : </label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <p> Current username is : {username} </p>
        <p>Selectyed age is: {age}</p>
      </>
      <>
        <select onChange={handleOnChange}>
          <option value="the e.target.value thingy"> select age </option>
          {[...Array(200).keys()].slice(18).map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </>
    </div>
  );
};

//prev code
//   return (
//     <UserContext.Consumer>
//       {(storedValue) => (
//         <div>
//           <h2> User Page </h2>
//           <label> change username : </label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => storedValue.setUsername(e.target.value)}
//           />
//           <p> Current username is : {storedValue.username} </p>
//         </div>
//       )}
//     </UserContext.Consumer>
//   );
// };
