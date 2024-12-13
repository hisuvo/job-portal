import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

export default function UseAuth() {
  const context = useContext(AuthContext);
  return context;
}
