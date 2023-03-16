import { createContext } from "react";

// user context
const UserContext = createContext({
  auth: {},
  setAuth: (data: any) => {
    data;
  },
});

export default UserContext;
