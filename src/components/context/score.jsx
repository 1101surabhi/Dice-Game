import { createContext } from "react";

const scoreContext = createContext({
  score: 0,
  setScore: () => {},
  userNumber: 0,
  setUserNumber: () => {},
  showWarning: false,
  setShowWarning: () => {},
  isRolling: false,
  setIsRolling: () => {},
  showAlert : '',
  setShowAlert: () => {},
});

export default scoreContext;
