import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { color } from "../colors/Tema";

export default function Produtos() {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: color.cinza3,
      paddingBottom: 40,
    },
    titulo: {
      fontSize: 18,
      color: color.texto,
      fontWeight: "600",
      marginBottom: 10,
    },
    titulo2: {
      fontSize: 15,
      color: color.texto,
      fontWeight: "600",
      marginTop: 10,
    },
    card: {
      marginTop: 10,
      marginRight: 20,
      backgroundColor: color.cinza2,
      width: 250,
      padding: 10,
      borderRadius: 10,
    },
    botao: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: color.ruivo1,
      borderRadius: 50,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    textoBotao: {
      color: color.branco,
      fontWeight: "bold",
      fontSize: 16,
    },
  });

  const lista = [
    {
      titulo: "Notebook Asus ROG Strix G16",
      texto:
        "Garantia de desempenho supremo que você precisa para elevar sua gameplay e carregar seu time em quaisquer desafios.",
      textoBotao: "Ver detalhes",
      imagem: require("../images/img1.jpg"),
    },
    {
      titulo: "PS4 Slim 1TB",
      texto:
        "Video Game de procedência que coloca o jogador em primeiro lugar com uma seleção de lançamentos surpreendentes.",
      textoBotao: "Ver detalhes",
      imagem: require("../images/img2.jpeg"),
    },
    {
      titulo: "Xiaomi Mi 11 Lite 5G",
      texto:
        "O Xiaomi Mi 11 Lite 5G combina o design mais fino com o mais poderoso, com 8GB de RAM e 128GB de armazenamento.",
      textoBotao: "Ver detalhes",
      imagem: require("../images/img3.jpeg"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos Finalizados</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {lista.map((item, i) => (
          <View style={styles.card} key={i}>
            <Image
              source={item.imagem}
              style={{ width: 230, height: 150, borderRadius: 10 }}
            />
            <Text style={styles.titulo2}>{item.titulo}</Text>
            <Text>{item.texto}</Text>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>{item.textoBotao}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
