import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon1 from "react-native-vector-icons/Octicons";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "../colors/Tema";

export default function MenuFixo() {
  const [selecionado, setSelecionado] = useState(1);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    // Atualiza o estado 'selecionado' ao mudar de rota
    switch (route.name) {
      case "Home":
        setSelecionado(1);
        break;
      case "Solutions":
        setSelecionado(3);
        break;
      case "Produtos":
        setSelecionado(2);
        break;
      // Adicione mais casos conforme necessário para outras rotas
      default:
        setSelecionado(1);
    }
  }, [route]);

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      position: "absolute",
      left: 100,
      bottom: 0,
    },
    menu: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: color.branco,
      width: 200,
      height: 60,
      borderRadius: 50,
      marginBottom: 10,
    },
    selects: {
      height: "90%",
      width: "30%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={{
            ...styles.selects,
            backgroundColor: selecionado === 1 ? color.ruivo4 : null,
          }}
          onPress={() => {
            setSelecionado(1);
            navigation.navigate("Home");
          }}
        >
          <Icon1
            name="home"
            size={25}
            color={selecionado === 1 ? color.ruivo2 : color.iconecinza}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.selects,
            backgroundColor: selecionado === 3 ? color.ruivo4 : null,
          }}
          onPress={() => {
            setSelecionado(3);
            navigation.navigate("Solutions");
          }}
        >
          <Icon4
            name="list-status"
            size={25}
            color={selecionado === 3 ? color.ruivo2 : color.iconecinza}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.selects,
            backgroundColor: selecionado === 2 ? color.ruivo4 : null,
          }}
          onPress={() => {
            setSelecionado(2);
            navigation.navigate("Produtos");
          }}
        >
          <Icon4
            name="cellphone-check"
            size={25}
            color={selecionado === 2 ? color.ruivo2 : color.iconecinza}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
