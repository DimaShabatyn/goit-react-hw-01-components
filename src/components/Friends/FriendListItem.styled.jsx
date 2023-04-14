import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;
  max-width: 100%;
  width: 500px;
  border-radius: 8px;
  box-shadow: -1px -1px 10px black, 1px 1px 10px gray;
  background-color: bisque;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 12px;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 20px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const Name = styled.p`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;
