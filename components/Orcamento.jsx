import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { color } from "../colors/Tema";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

export default function Orcamento() {
  const [fatura, setFatura] = useState("1.822,56");
  const [modalVisible, setModalVisible] = useState(false);

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: color.cinza3,
      paddingBottom: 60,
    },
    cartao: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    conta: {
      fontSize: 18,
      color: color.texto,
      fontWeight: "600",
    },
    fechada: {
      marginTop: 10,
    },
    pagar: {
      marginTop: 20,
    },
    row: {
      flexDirection: "row",
      marginTop: 20,
    },
    botaoPagar: {
      backgroundColor: color.cinza2,
      paddingVertical: 10,
      paddingHorizontal: 25,
      marginRight: 15,
      borderRadius: 50,
      fontWeight: "500",
      fontSize: 16,
    },
    vermelho: {
      backgroundColor: color.vermelho,
      color: color.branco,
      fontWeight: "bold",
    },
    participar: {
      backgroundColor: color.cinza2,
      height: 60,
      marginVertical: 30,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 15,
    },
    textoRuivo: {
      color: color.ruivo1,
    },
    row2: {
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cartao}>
        <View>
          <Text style={styles.conta}>Fazer orcamento</Text>
        </View>
        <View>
          <Icon1 name="right" size={18} color={color.texto} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onLongPress={() => setModalVisible(true)}
        style={styles.fechada}
      >
        <Text style={styles.textoFechada}>Valor Serviço</Text>
        <Text style={styles.conta}>R$ {fatura}</Text>
      </TouchableOpacity>

      <Text style={styles.pagar}>Vencimento dia 09</Text>
      <View style={styles.row}>
        <Text style={[styles.botaoPagar, styles.vermelho]}>Pagar Serviço</Text>
        <Text style={styles.botaoPagar}>Parcelar</Text>
      </View>

      <TouchableOpacity style={styles.participar}>
        <View style={styles.row2}>
          <Icon2
            name="ticket-confirmation-outline"
            size={25}
            style={{ marginRight: 15 }}
          />
          <Text>Cupom de desconto</Text>
        </View>
        <Text style={styles.textoRuivo}>Obter</Text>
      </TouchableOpacity>
    </View>
  );
}
