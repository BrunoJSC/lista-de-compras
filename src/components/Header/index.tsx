import { TouchableOpacity } from "react-native-gesture-handler";

import { Box, Container, Title } from "./style";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const navigation = useNavigation();
  return (
    <Container>
      <Box>
        <Title>Sua lista de compras</Title>

        <TouchableOpacity onPress={() => navigation.navigate("form")}>
          <Feather name="plus-circle" size={24} color="#fff" />
        </TouchableOpacity>
      </Box>
    </Container>
  );
}
