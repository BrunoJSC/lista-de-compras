import { TextInputProps } from "react-native";
import { Container } from "./style";

type InputProps = TextInputProps & {
  title: string;
};

export function Input({ title, ...rest }: InputProps) {
  return <Container placeholder={title} {...rest} />;
}
