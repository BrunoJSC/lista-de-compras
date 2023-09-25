import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./style";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
