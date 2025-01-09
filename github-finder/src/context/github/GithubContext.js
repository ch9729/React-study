import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// 프로바이더가 전역으로 컨텍스트를 적용함
export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  // 키워드로 유저 리스트
  const searchUsers = (text) => {
    setLoading(true);
    const params = new URLSearchParams({ q: text });
    const response = fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getUser = (login) => {
    setLoading(true);

    const response = fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => (window.location = "/notfound"));
  };
  return (
    <GithubContext.Provider
      value={{ users, loading, searchUsers, getUser, user }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
