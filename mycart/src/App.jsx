import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import Routing from "./components/Routing/Routing";
import { jwtDecode } from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      if (Date.now() >= jwtUser.exp * 1000) {
        localStorage.removeItem("token");
        window.location.reload(); // 재시작(새로고침)
      } else {
        setUser(jwtUser);
      }
    } catch (error) {} // 토큰이 없을경우 아무 처리 없다
  }, []);
  return (
    <div className="app">
      <Navbar user={user} />
      <main>
        <Routing />
      </main>
    </div>
  );
}

export default App;
