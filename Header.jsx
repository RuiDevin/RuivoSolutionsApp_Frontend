import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { color } from "../colors/Tema";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Octicons";
import Icon3 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/Fontisto";

export default function Header({ exibirValor, setExibirValor }) {
  const [user, setUser] = useState("Ruivo Solutions");
  const styles = StyleSheet.create({
    container: {
      height: 130,
      backgroundColor: color.ruivo1,
      justifyContent: "space-evenly",
    },
    info: {
      backgroundColor: color.branco,
      height: 50,
      width: "100%",
      marginHorizontal: 20,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    texto: {
      color: color.ruivo1,
    },
    menuTop: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    circle: {
      height: 45,
      width: 45,
      marginLeft: 20,
      marginTop: 30,
      borderRadius: 50,
      backgroundColor: color.cinza1,
      alignItems: "center",
      justifyContent: "center",
    },
    subMenuLeft: {
      flexDirection: "row",
      width: "50%",
    },
    subMenuRight: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: "50%",
      height: 45,
    },
    icones: { marginHorizontal: 10 },
    nome: {
      marginLeft: 20,
      color: color.branco,
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.menuTop}>
        <View style={styles.subMenuLeft}>
          <TouchableOpacity style={styles.info}>
            <Text style={styles.texto}>
              Problemas? A RuivoSolutions concerta!
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subMenuRight}>
          <Icon3
            name="questioncircleo"
            color={color.branco}
            size={20}
            style={styles.icones}
          />
          <Icon4
            name="email"
            color={color.branco}
            size={20}
            style={styles.icones}
          />
        </View>
      </View>
    </View>
  );
}
