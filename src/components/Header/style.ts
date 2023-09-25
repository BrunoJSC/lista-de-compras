import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 160px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #1d4ed8;
`;

export const Box = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-width: bold;
  font-size: 20px;
`;
