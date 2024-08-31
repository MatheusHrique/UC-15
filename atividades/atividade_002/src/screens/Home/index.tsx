import { SafeAreaView, ImageBackground } from "react-native";
import {
  AdvancedDescription,
  ColorBranco,
  Description,
  Title,
  Imagem1,
  Imagem2,
} from "./styles";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#000000" }}>
      <Imagem1 source={require("../../assets/background1.jpg")} />
      <Title>
        "-
        <ColorBranco>
          No momento de maior escuridão, os homens veem as estrelas
        </ColorBranco>
        ." -Ralph Waldo Emerson.
      </Title>
      <ImageBackground source={require("../../assets/background2.png")}>
        <Description>
          Olá! Meu nome é
          <ColorBranco> Matheus Henrique Justin Caetano!</ColorBranco> Tenho 18
          anos e estou estudando dois cursos técnicos no momento, técnico de
          informática e técnico de desenvolvimento de sistemas!
        </Description>
        <Imagem2 source={require("../../assets/computer.gif")} />
        <Description>
          Estou passando os ultimos <ColorBranco>4 anos</ColorBranco> me
          integrando na área da informática, cujo objetivo é ser um{" "}
          <ColorBranco>
            desenvolvedor pleno full stack em programação web
          </ColorBranco>
          . Foi um sonho de uma criança que inicialmente foi inspirado pelas
          criações de <ColorBranco>Markus Person</ColorBranco> - Foi quem criou
          o <ColorBranco>Minecraft</ColorBranco>, sendo uma das principais
          causas de eu ter começado na área da programação desktop, web, mobile
          e da informática.
        </Description>
        <AdvancedDescription>
          <ColorBranco>*Habilidades:</ColorBranco> {"\n\n"}
          -Linguagem de programação nível intermediário: Java, {"\n\n"}
          -Desenvolvimento web nível intermediário: (HTML, CSS, JavaScript,
          Typescript), {"\n\n"}
          -Banco de dados nível intermediário (MariaDB), {"\n\n"}
          -Ferramentas de desenvolvimento (Visual Studio, Netbeans, Git,
          Github),
          {"\n\n"}
          -Inglês, nível de conversação e escrita: Intermediário, {"\n\n"}
          -React native: Nível básico, {"\n\n"}
          -Instalação e manunteção de componentes e computadores nível
          intermediário.
        </AdvancedDescription>
        <AdvancedDescription>
          <ColorBranco>*Ensino:</ColorBranco> {"\n\n"}
          -Ensino médio | ETEP (Previsão de conclusão: Dezembro de 2024),{" "}
          {"\n\n"}
          -Técnico de informática | ETEP-RS (Previsão de conclusão: Dezembro de
          2024), {"\n\n"}
          -Técnico de desenvolvimento de sistemas | Senac-RS (Previsão de
          conclusão: Dezembro de 2024).
        </AdvancedDescription>
        <AdvancedDescription>
          <ColorBranco>*Contatos:</ColorBranco> {"\n\n"}
          -São Leopoldo, {"\n\n"}
          -RS. +55 51 98408-5119. {"\n\n"}
          -Email: matheushenriquejustincaetano@gmail.com {"\n\n"}
          -Github: https://github.com/MatheusHrique
        </AdvancedDescription>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
