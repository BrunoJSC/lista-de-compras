import { Text, View } from "react-native";
import { Box, Container } from "./style";
import { Header } from "../../components/Header";
import { Feather } from "@expo/vector-icons";
import { useCallback, useLayoutEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "../../components/Card";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

interface Props {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

export function Home() {
  const { getItem, setItem, removeItem } = useAsyncStorage("@products");
  const [data, setData] = useState<Props[]>([]);

  async function handleAddProduct() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }

  async function handleRemoveProduct(id: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    const newData = previousData.filter((item: Props) => item.id !== id);
    setItem(JSON.stringify(newData));
  }

  const total = data.reduce((acc, item) => {
    const price = parseFloat(item.price);
    const quantity = parseFloat(item.quantity);

    const productTotal = price * quantity;
    return acc + productTotal;
  }, 0);

  useLayoutEffect(
    useCallback(() => {
      handleAddProduct();
    }, []),
  );

  return (
    <Container>
      <Header />
      <Box>
        <Feather name="shopping-cart" size={24} color="#000" />
        <Text>
          {data.length} Produtos | Total R$ {total}
        </Text>
      </Box>

      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => <Text>Nenhum produto adicionado</Text>}
          style={{ width: "100%", height: "100%", padding: 10 }}
          data={data}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onPress={() => handleRemoveProduct(item.id)}
            />
          )}
        />
      </View>
    </Container>
  );
}
