import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json();
      console.log(data);
      dataFetch();
      setUser(data);
    };
  }, []);
  console.log(user);

  return <div>{user.length}</div>;
}
