import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function Admin() {
  const router = useRouter();
  const [loginUser, setLoginuser] = useState([]);
  const [isLogin, setIslogin] = useState(false);
  function checkLogin() {
    axios.get('/api/isLogin').then((res) => {
      if (res.status === 200 && res.data.name) {
        //로그인
        setLoginuser(res.data.name);
        console.log(res.data);
        setIslogin(true);
      } else {
        router.push('/login');
      }
    });
  }
  function logout() {
    axios.get('/api/logout').then((res) => {
      if (res.status === 200) {
        router.push('/');
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      {isLogin && <Button onClick={logout}>Logout</Button>}
      admin
      {`유저이름: ${loginUser}`}
    </>
  );
}
