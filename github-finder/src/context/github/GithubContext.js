import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// 프로바이더가 전역으로 컨텍스트를 적용함
export const GithubProvider = ({ children }) => {
  const [users, SetUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUsers = () => {
    const response = fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        SetUsers(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
