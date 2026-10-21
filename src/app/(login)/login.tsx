import { Image, Pressable, StyleSheet, Text, TextInput, View, ScrollView,} from "react-native";
import React from "react";
import { useDimension } from "@/hooks/useDimension";
import MainLayout from "../(dashboard)/layout";
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";

function styleContent(width: number, height: number) {
  return StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "transparent",
      width: width * 0.9,
      minHeight: height * 0.8,
    },

    onContent: {
      width: width * 0.9,
      height: height * 0.25,
      alignItems: "center",
      justifyContent: "center",
    },

    twContent: {
      width: width * 0.9,
      backgroundColor: Colors.secundaria7,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      padding: width * 0.05,
    },

    trContent: {
      width: width * 0.9,
      backgroundColor: Colors.primaria3,
      alignItems: "center",
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      padding: width * 0.05,
    },

    logo: {
      width: 90,
      height: 75,
      marginTop: 10,
    },

    title: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.075,
      marginTop: 0,
    },

    line: {
      width: width * 0.65,
      height: 2,
      backgroundColor: Colors.secundaria2,
      marginTop: 18,
    },

    secTitle: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
      marginBottom: 5,
    },

    secTxt: {
      color: Colors.primaria3,
      fontSize: width * 0.04,
      fontFamily: Fonts.pBold,
    },

    lineTitle: {
      flex: 1,
      height: 1.5,
      backgroundColor: Colors.primaria3,
      marginLeft: 8,
    },

    description: {
      color: Colors.secundaria5,
      fontSize: width * 0.032,
      fontFamily: Fonts.pRegular,
      marginBottom: 6,
    },

    input: {
      width: "100%",
      height: 39,
      backgroundColor: Colors.secundaria2,
      borderRadius: 7,
      paddingHorizontal: 15,
      fontSize: width * 0.032,
      fontFamily: Fonts.pRegular,
      color: Colors.background,
      marginBottom: 20,
    },

    reset: {
      width: "100%",
      height: 34,
      borderWidth: 1,
      borderColor: Colors.primaria3,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 0,
      marginBottom: 0,
      elevation: 2,
      backgroundColor: Colors.secundaria1,
    },

    resetBtTxt: {
      color: Colors.primaria3,
      fontWeight: "bold",
      fontSize: width * 0.035,
    },

    titleRedBt: {
      color: Colors.secundaria1,
      fontSize: width * 0.035,
      fontWeight: "bold",
      marginTop: 0,
      marginBottom: 12,
    },

    txtRed: {
      color: Colors.secundaria1,
      fontSize: width * 0.03,
      textAlign: "center",
      lineHeight: 16,
      marginBottom: 15,
    },

    btRed: {
      width: "100%",
      height: 34,
      borderWidth: 1,
      borderColor: Colors.secundaria1,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },

    txtBtRed: {
      color: Colors.secundaria1,
      fontWeight: "bold",
      fontSize: width * 0.035,
    },

    btEnter: {
      width: width * 0.9,
      height: 44,
      backgroundColor: Colors.secundaria1,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 7,
      marginBottom: 10,
      elevation: 3,
    },

    txtBtEnter: {
      color: Colors.primaria3,
      fontWeight: "bold",
      fontSize: width * 0.04,
    },

    topStyle: {
      position: "absolute",
      top: 0,
      left: 0,
      width: width * 0.12,
      height: height * 0.095,
      backgroundColor: Colors.primaria3,
    },

    botStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: width * 0.12,
      height: height * 0.095,
      backgroundColor: Colors.primaria3,
    },
  });
}

function LoginContent() {
  const { width, height } = useDimension();
  const style = styleContent(width, height);

  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <View style={style.background}>
      <View style={style.topStyle} />

      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 10,
          paddingBottom: 10,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        <View style={style.onContent}>
          <Image
            style={style.logo}
            source={require("@/assets/images/logo.png")}
            resizeMode="contain"
          />

          <Text style={style.title}>Agendei.com</Text>

          <View style={style.line} />
        </View>

        <View style={style.twContent}>
          <View style={style.secTitle}>
            <Text style={style.secTxt}>Digite seu e-mail</Text>
            <View style={style.lineTitle} />
          </View>

          <Text style={style.description}>Mínimo 6 caracteres</Text>

          <TextInput
            style={style.input}
            placeholder="Ex: domcomedia@gmail.com"
            placeholderTextColor="#808080"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <View style={style.secTitle}>
            <Text style={style.secTxt}>Digite sua senha</Text>
            <View style={style.lineTitle} />
          </View>

          <Text style={style.description}>Mínimo 9 caracteres</Text>

          <TextInput
            style={style.input}
            placeholder="Ex: joaosilva@gmail.com"
            placeholderTextColor="#808080"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <Pressable
            style={style.reset}
            onPress={() => {
              setEmail("");
              setSenha("");
            }}
          >
            <Text style={style.resetBtTxt}>Limpar</Text>
          </Pressable>
        </View>

        <View style={style.trContent}>
          <Text style={style.titleRedBt}>
            Não possui uma conta?
          </Text>

          <Text style={style.txtRed}>
            Crie uma nova conta e comece{"\n"}
            sua jornada conosco
          </Text>

          <Pressable
            style={style.btRed}
            onPress={() => {
              // Adicione aqui a navegação para o cadastro
            }}
          >
            <Text style={style.txtBtRed}>Cadastrar</Text>
          </Pressable>
        </View>

        <Pressable
          style={style.btEnter}
          onPress={() => {
            // Adicione aqui a validação e o login
          }}
        >
          <Text style={style.txtBtEnter}>Fazer login</Text>
        </Pressable>
      </ScrollView>

      <View style={style.botStyle} />
    </View>
  );
}

export default function Login() {
  return (
    <MainLayout>
      <LoginContent />
    </MainLayout>
  );
}
