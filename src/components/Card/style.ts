import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 150px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #eee;

  margin-vertical: 15px;
`;

export const Box = styled.View`
  height: 50px;

  flex-direction: row;
  align-items: center;

  gap: 100px;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 20px;
`;

export const Value = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const TextPrice = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;
