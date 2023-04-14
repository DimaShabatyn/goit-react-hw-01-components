import styled from 'styled-components';
import { getRandomHexColor } from 'utils/getRandomHexColor';

//Styled Components
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  max-width: 100%;
  width: 500px;
  border-radius: 8px;
  box-shadow: -1px -1px 10px black, 1px 1px 10px gray;
  background-color: bisque;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 12px;
`;

export const Title = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  padding: 24px;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid grey;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: 10px 0;
  width: 100%;
  height: 100%;
  :not(:last-child) {
    border-right: 1px solid grey;
  }
  background-color: ${props => getRandomHexColor(props.index)};
`;
