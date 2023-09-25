import { Text, View } from "react-native";
import { Box, Container, TextPrice, Title, Value } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

interface CardProps {
  onPress: () => void;
  name: string;
  quantity: string;
  price: string;
}

export function Card({ onPress, name, quantity, price }: CardProps) {
  return (
    <Container>
      <Box>
        <Title>{name}</Title>
        <View>
          <Value>Qto: {quantity}</Value>
          <TextPrice>R$: {price}</TextPrice>
        </View>
      </Box>

      <TouchableOpacity onPress={onPress}>
        <Feather name="trash" size={24} color="#ff0000" />
      </TouchableOpacity>
    </Container>
  );
}
