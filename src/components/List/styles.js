import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  opacity: ${props => (props.done ? 0.6 : 1)};

  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    height: 42px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 16px;
      font-weight: 500;
      padding: 0 10px;
    }

    button {
      height: 42px;
      width: 42px;
      border-radius: 18px;
      background: #3b53fd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
