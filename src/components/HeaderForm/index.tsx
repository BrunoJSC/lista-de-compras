import { TouchableOpacity } from "react-native-gesture-handler";
import { Container, Title } from "./style";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function HeaderForm() {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      <Title>Adicionar itens</Title>
    </Container>
  );
}
