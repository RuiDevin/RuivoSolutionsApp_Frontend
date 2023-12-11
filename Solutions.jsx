import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { color } from "../colors/Tema";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon6 from "react-native-vector-icons/FontAwesome";
import Icon7 from "react-native-vector-icons/Octicons";

export default function Solutions({ exibirValor }) {
  const [valor, setValor] = useState("13");
  const [modalVisible, setModalVisible] = useState(false);

  const listaOpcoes = [
    {
      nome: "Computdores",
      icone: <Icon3 name="computer" size={24} />,
    },
    {
      nome: "Impressoras",
      icone: <Icon4 name="printer" size={24} />,
    },
    {
      nome: "Video Game",
      icone: <Icon5 name="gamepad" size={24} />,
    },
    {
      nome: "Telefones",
      icone: <Icon7 name="device-mobile" size={24} />,
    },
    {
      nome: "Internet",
      icone: <Icon6 name="wifi" size={24} />,
    },
  ];

  const Opcoes = (lista) => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          {lista.lista.map((item, i) => (
            <View key={i} style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.circulo}>
                {item.icone}
              </TouchableOpacity>
              <Text style={{ marginTop: 10, marginLeft: 8, marginRight: 8 }}>
                {item.nome}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  const CardInfo = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.infos}>
          <Text style={styles.textoInfo}>
            Manutenção rápida e eficiente, com
            <Text style={styles.textoRuivo}> 100% de segurança</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infos}>
          <Text style={styles.textoInfo}>
            Produtos prontos e entregues
            <Text style={styles.textoRuivo}> no máximo em 24h</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infos}>
          <Text style={styles.textoInfo}>
            <Text style={styles.textoRuivo}>Espalhe para mais amigos </Text>e
            ganhe descontos
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      marginTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: color.cinza3,
      paddingBottom: 20,
    },
    conta: {
      fontSize: 18,
      color: color.texto,
      fontWeight: "600",
    },
    saldo: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    saldoClosed: {
      flexDirection: "row",
      marginTop: 10,
    },
    circulo: {
      backgroundColor: color.cinza2,
      marginRight: 10,
      height: 70,
      width: 70,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    cartoes: {
      flexDirection: "row",
      backgroundColor: color.cinza2,
      height: 50,
      borderRadius: 7,
      alignItems: "center",
      marginTop: 20,
      paddingLeft: 10,
    },
    texto: {
      marginLeft: 10,
      fontWeight: "600",
    },
    infos: {
      backgroundColor: color.cinza2,
      padding: 20,
      width: 300,
      borderRadius: 10,
      marginRight: 20,
    },
    textoRuivo: {
      color: color.ruivo1,
    },
    textoInfo: {
      lineHeight: 20,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onLongPress={() => setModalVisible(true)}
        style={styles.saldo}
      >
        <View>
          <Text style={styles.conta}>Serviços Pendentes</Text>
          {exibirValor ? (
            <Text
              style={{
                color: color.texto,
                fontWeight: "600",
                marginTop: 6,
                fontSize: 14,
              }}
            >
              Quantidade: {valor}
            </Text>
          ) : (
            <View style={styles.saldoClosed}>
              <Icon2 name="controller-record" />
              <Icon2 name="controller-record" />
              <Icon2 name="controller-record" />
              <Icon2 name="controller-record" />
            </View>
          )}
        </View>
        <View>
          <Icon1 name="right" size={18} color={color.texto} />
        </View>
      </TouchableOpacity>

      <View style={{ marginTop: 30 }}>
        <Opcoes lista={listaOpcoes} />
      </View>

      <TouchableOpacity style={styles.cartoes}>
        <Icon2 name="list" size={22} />
        <Text style={styles.texto}>Lista de Serviços</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 30 }}>
        <CardInfo />
      </View>
    </View>
  );
}
