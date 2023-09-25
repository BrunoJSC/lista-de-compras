import styled from "styled-components/native";

export const Container = styled.TextInput.attrs({
  placeholderTextColor: "#999",
})`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  background: #fff;
  border-radius: 5px;
  border: 2px solid #eee;
  font-size: 16px;

  margin-vertical: 15px;
`;
