import React, { useState } from 'react';
import { useAuthContext } from 'contexts/AuthContext';

function Login() {
  const { login, isAuthenticated } = useAuthContext();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    login(data);
  };
  return (
    <div>
      <div>{String(isAuthenticated)}</div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="eamil"
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="password"
            value={data.password}
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </label>
        <input type="submit" value="제출" />
      </form>
    </div>
  );
}

export default Login;
