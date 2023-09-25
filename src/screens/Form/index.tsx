import { Container, Forms } from "./style";
import { HeaderForm } from "../../components/HeaderForm";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";

export function Form() {
  const navigation = useNavigation();
  const { setItem, getItem } = useAsyncStorage("@products");
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  async function handleAddProduct() {
    try {
      const data = {
        id: uuid.v4(),
        name,
        quantity,
        price,
      };
      console.log(data);

      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      const newData = [...previousData, data];

      await setItem(JSON.stringify(newData));

      Toast.show({
        type: "success",
        text1: "Produto adicionado com sucesso!",
      });

      setName("");
      setQuantity("");
      setPrice("");

      navigation.navigate("home");
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Erro ao adicionar produto!",
      });
    }
  }

  return (
    <Container>
      <HeaderForm />

      <Forms>
        <Input title="Nome do produto" onChangeText={setName} value={name} />
        <Input
          title="Quantidade"
          onChangeText={setQuantity}
          value={quantity}
          keyboardType="numeric"
        />
        <Input
          title="Preço"
          onChangeText={setPrice}
          value={price}
          keyboardType="numeric"
        />

        <Button title="Adicionar" onPress={handleAddProduct} />
      </Forms>
    </Container>
  );
}
