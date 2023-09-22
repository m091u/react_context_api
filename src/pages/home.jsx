import { useContext } from "react";
import UserContext from "../contexts/user.context";

export const Home = () => {
  const { usernameState, ageState } = useContext(UserContext);
  const [username] = usernameState;
  const [age] = ageState;

  console.log(usernameState);
  return (
    <div>
      <h2> Home Page </h2>
      <p>
        Hello {username} and my age is {age}
      </p>
    </div>
  );
};

//old
//   return (
//     <UserContext.Consumer>
//       {(storedValue) => (
//         <div>
//           <h2> Home Page </h2>
//           <p> Hello {storedValue.username} </p>
//         </div>
//       )}
//     </UserContext.Consumer>
//   );
// };
