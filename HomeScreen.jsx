import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import { color } from "../colors/Tema";

export default function HomeScreen() {
  const listaImagens = [
    require("../images/img4.jpg"),
    require("../images/img5.jpeg"),
    require("../images/img6.jpeg"),
    require("../images/img7.jpeg"),
  ];

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item} style={styles.carouselImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={listaImagens}
        renderItem={renderCarouselItem}
        sliderWidth={600}
        itemWidth={400}
        loop={true}
        autoplay={true}
        autoplayInterval={5000}
        inactiveSlideOpacity={0.7}
        marginTop={20}
      />
      <View style={styles.separator} />
      <Text style={styles.presentationText}>
        Bem-vindo aos nossos serviços de eletrônicos. Oferecemos soluções
        rápidas e eficientes para manutenção de computadores, impressoras, video
        games, telefones e serviços de internet. Conte conosco para atender às
        suas necessidades!
      </Text>
      <View style={styles.separator} />

      {/* Adicionando o rodapé com suas credenciais do GitHub */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Desenvolvido por RuiDevin</Text>
        <Text style={styles.footerText}>GitHub: github.com/RuiDevin</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.background,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  carouselItem: {
    alignItems: "center",
  },
  carouselImage: {
    width: 400,
    height: 300,
    borderRadius: 10,
  },
  separator: {
    width: "80%",
    height: 1,
    backgroundColor: color.cinza3,
    marginVertical: 20,
  },
  presentationText: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 24,
    color: color.texto,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 50,
  },
  footerText: {
    fontSize: 16,
    color: color.texto,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    textDecorationStyle: "solid",
    textDecorationColor: color.cinza3,
  },
});
