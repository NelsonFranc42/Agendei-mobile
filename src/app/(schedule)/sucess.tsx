
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { useDimension } from "@/hooks/useDimension";
import { router } from "expo-router";
import { Check } from "lucide-react-native";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MainLayout } from "../../components/layout";

function styleContent(width: number, height: number) {
  return StyleSheet.create({
    background: {
      flex: 1,
      width: width * 0.9,
      alignItems: "center",
    },

    scroll: {
      width: "100%",
      flex: 1,
    },

    content: {
      alignItems: "center",
      paddingTop: height * 0.09,
      paddingBottom: 30,
    },

    onContent: {
      width: "100%",
      alignItems: "center",
      marginBottom: height * 0.045,
    },

    logo: {
      width: width * 0.32,
      height: height * 0.13,
    },

    title: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.075,
      marginTop: 5,
    },

    line: {
      width: "70%",
      height: 2,
      backgroundColor: "#C7C7C7",
      marginTop: height * 0.035,
    },

    card: {
      width: "100%",
      minHeight: height * 0.42,
      backgroundColor: "#FFFFFF",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      padding: width * 0.06,
      elevation: 3,
    },

    successCircle: {
      width: width * 0.29,
      height: width * 0.29,
      borderRadius: width * 0.145,
      backgroundColor: Colors.primaria3,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
    },

    successTitle: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.07,
      textAlign: "center",
    },

    smallLine: {
      width: "40%",
      height: 2,
      backgroundColor: "#C7C7C7",
      marginVertical: height * 0.025,
    },

    successDescription: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.051,
      textAlign: "center",
      lineHeight: width * 0.075,
    },

    buttonBack: {
      width: "100%",
      height: 45,
      backgroundColor: "#FFFFFF",
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 12,
      elevation: 3,
    },

    buttonBackText: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.036,
    },
  });
}

function SuccessContent() {
  const { width, height } = useDimension();
  const style = styleContent(width, height);

  function voltar() {
    router.replace("/(dashboard)");
  }

  return (
    <View style={style.background}>
      <ScrollView
        style={style.scroll}
        contentContainerStyle={style.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.onContent}>
          <Image
            style={style.logo}
            source={require("@/assets/images/logo.png")}
            resizeMode="contain"
          />

          <Text style={style.title}>
            Agendei.com
          </Text>

          <View style={style.line} />
        </View>

        <View style={style.card}>
          <View style={style.successCircle}>
            <Check
              size={width * 0.19}
              color="#FFFFFF"
              strokeWidth={1.5}
            />
          </View>

          <Text style={style.successTitle}>
            Tudo certo!
          </Text>

          <View style={style.smallLine} />

          <Text style={style.successDescription}>
            Seu agendamento{"\n"}
            foi concluído com{"\n"}
            sucesso!
          </Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            style.buttonBack,
            { opacity: pressed ? 0.8 : 1 },
          ]}
          onPress={voltar}
        >
          <Text style={style.buttonBackText}>
            Voltar
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default function Success() {
  return (
    <MainLayout>
      <SuccessContent />
    </MainLayout>
  );
}
