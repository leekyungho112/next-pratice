import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: '100px 0 0' }}>
          {' '}
          <img
            src="/images/mole.png"
            alt="logo"
            style={{ width: 80, height: 80 }}
          />
        </div>

        <Header as="h1">Developer</Header>
      </div>
      <Gnb />
    </div>
  );
}
