import styled from 'styled-components';

export const Table = styled.table`
  max-width: 100%;
  width: 500px;
  border-radius: 8px;
  box-shadow: -1px -1px 10px black, 1px 1px 10px gray;
  background-color: bisque;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 12px;
`;

export const Thead = styled.thead`
  text-transform: uppercase;
  text-size: 24px;
  text-align: center;
`;

export const Row = styled.tr`
  background-color: ${props => (props.index % 2 === 0 ? 'yellow' : 'aqua')};
  text-align: center;
`;
