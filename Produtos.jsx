import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Solutions from "./components/Solutions";
import { useState } from "react";
import Orcamento from "./components/Orcamento";
import Produtos from "./components/Produtos";
import MenuFixo from "./components/MenuFixo";
import { color } from "./colors/Tema";

export default function Home() {
  const [exibirValor, setExibirValor] = useState(true);

  return (
    <View style={{ height: "100%", backgroundColor: color.cinza1 }}>
      <ScrollView>
        <Header />
        <Produtos />
        <Orcamento />
      </ScrollView>
      <MenuFixo />
    </View>
  );
}
