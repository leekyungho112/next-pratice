import { Icon } from 'semantic-ui-react';

export default function Error404() {
  return (
    <div style={{ padding: '200px 0', textAlign: 'center', fontSize: 30 }}>
      <Icon name="warning circle" color="red" />
      죄송합니다. 요청하신 페이지를 찾을수가 없습니다.
    </div>
  );
}
