import axios from 'axios';
import { useRouter } from 'next/router';
import { Button, Form } from 'semantic-ui-react';

export default function Login() {
  const router = useRouter();
  function login() {
    axios.post('/api/login').then((res) => {
      if (res.status === 200) {
        router.push('/admin');
      }
    });
  }

  return (
    <div style={{ padding: '100px 0', textAlign: 'center' }}>
      <Form>
        <Form.Field inline>
          <label>아이디</label>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <label>비밀번호</label>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button color="blue" onClick={login}>
          로그인
        </Button>
      </Form>
    </div>
  );
}
