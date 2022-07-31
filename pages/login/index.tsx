import React, { useState } from 'react';
import instance from 'apis/instance';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await instance({
      method: 'POST',
      url: '/signin',
      data,
    });
    // accessToken을 쿠키에 저장해야 한다.
    console.log(response);
  };
  return (
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
  );
}

export default Login;
