import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.color || '#4CAF50'};
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
`;

export const Counter = styled.p`
  color: #FFF;
  text-align: center;
  font-size: 25px;
  text-shadow: #FC0 1px 0 10px;
`;

