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
    <Container style={{ flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginHorizontal: 10 }}>
          <View style={{ gap: 10 }}>
            <Title numberOfLines={1}>{name}</Title>
          </View>
          <View>
            <Value>Qto: {quantity}</Value>
            <TextPrice>R$: {price}</TextPrice>
          </View>
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <TouchableOpacity onPress={onPress} style={{ marginLeft: "auto" }}>
          <Feather name="trash" size={24} color="#ff0000" />
        </TouchableOpacity>
      </View>
    </Container>
  );
}
