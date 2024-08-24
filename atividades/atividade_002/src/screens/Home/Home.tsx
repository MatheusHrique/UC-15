import {
  Text,
  View,
  StyleSheet,
  Animated,
  ViewStyle,
  Image,
} from "react-native";
import {
  AdvancedDescription,
  ColorBranco,
  Container,
  ContainerTwo,
  Description,
  Title,
} from "./styles";
import { PropsWithChildren, useEffect, useRef } from "react";

// type FadeInViewProps = PropsWithChildren<{ style: typeof Container }>;

// const FadeInView: React.FC<FadeInViewProps> = (props) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 10000,
//       useNativeDriver: true,
//     }).start();
//   }, [fadeAnim]);

//   return (
//     <Animated.View // Special animatable View
//       style={{
//         ...props.style,
//         opacity: fadeAnim, // Bind opacity to animated value
//       }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// };

const Home = () => {
  return (
    <Container>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Title>
          "-
          <ColorBranco>
            No momento de maior escuridão, os homens veem as estrelas
          </ColorBranco>
          ." -Ralph Waldo Emerson.
        </Title>

        <ContainerTwo>
          <Description>
            Olá! Meu nome é
            <ColorBranco> Matheus Henrique Justin Caetano!</ColorBranco> Tenho
            18 anos e estou estudando dois cursos técnicos no momento, técnico
            de informática e técnico de desenvolvimento de sistemas!
          </Description>
          <Image
            source={require("../../assets/computer.gif")}
            style={{
              width: "60%",
              height: 150,
              borderRadius: 20,
              borderWidth: 4,
              borderColor: "#250b63",
            }}
          />
          <Description>
            Estou passando os ultimos <ColorBranco>4 anos</ColorBranco> me
            integrando na área da informática, cujo objetivo é ser um{" "}
            <ColorBranco>
              desenvolvedor pleno full stack em programação web
            </ColorBranco>
            . Foi um sonho de uma criança que inicialmente foi inspirado pelas
            criações de <ColorBranco>Markus Person</ColorBranco> - Foi quem
            criou o <ColorBranco>Minecraft</ColorBranco>, sendo uma das
            principais causas de eu ter começado na área da programação desktop,
            web, mobile e da informática.
          </Description>
        </ContainerTwo>
        <AdvancedDescription>
          <ColorBranco>Habilidades:</ColorBranco> {"\n\n"}
          -Linguagem de programação nível intermediário: Java, {"\n"}
          -Desenvolvimento web nível intermediário: (HTML, CSS, JavaScript,
          Typescript), {"\n"}
          -Banco de dados nível intermediário (MariaDB), {"\n"}
          -Ferramentas de desenvolvimento (Visual Studio, Netbeans, Git,
          Github), {"\n"}
          -Inglês, nível de conversação e escrita: Intermediário, {"\n"}
          -React native: Nível básico, {"\n"}
          -Instalação e manunteção de componentes e computadores nível
          intermediário.
        </AdvancedDescription>
        <AdvancedDescription>
          <ColorBranco>Educação:</ColorBranco> {"\n\n"}
          -Ensino médio | ETEP (Previsão de conclusão: Dezembro de 2024), {"\n"}
          -Técnico de informática | ETEP-RS (Previsão de conclusão: Dezembro de
          2024), {"\n"}
          -Técnico de desenvolvimento de sistemas | Senac-RS (Previsão de
          conclusão: Dezembro de 2024).
        </AdvancedDescription>

        <AdvancedDescription>
          <ColorBranco>Contatos:</ColorBranco> {"\n\n"}
          São Leopoldo, RS. +55 51 98408-5119. {"\n"}
          matheushenriquejustincaetano@gmail.com {"\n"}
          Github: https://github.com/MatheusHrique
        </AdvancedDescription>
      </View>
    </Container>
  );
};

export default Home;
