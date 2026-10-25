
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { useDimension } from "@/hooks/useDimension";
import { router, useLocalSearchParams } from "expo-router";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Scissors,
  UserRound,
  Info,
} from "lucide-react-native";
import React from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MainLayout } from "../../components/layout-noimages";

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
      paddingTop: height * 0.025,
      paddingBottom: 15,
    },

    backIcon: {
      width: 40,
      height: 40,
      justifyContent: "center",
    },

    progress: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 8,
      marginBottom: height * 0.04,
    },

    circle: {
      width: 22,
      height: 22,
      borderRadius: 11,
      backgroundColor: Colors.primaria3,
    },

    progressLine: {
      width: width * 0.12,
      height: 2,
      backgroundColor: Colors.primaria3,
    },

    title: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.069,
      lineHeight: width * 0.1,
      marginBottom: 10,
    },

    description: {
      color: Colors.secundaria5,
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.039,
      lineHeight: width * 0.058,
      marginBottom: 20,
    },

    card: {
      backgroundColor: "#E9E9E9",
      borderRadius: 9,
      padding: width * 0.035,
      width: "100%",
    },

    company: {
      backgroundColor: Colors.primaria3,
      borderRadius: 6,
      padding: 12,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },

    avatar: {
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: "#E5E5E5",
      marginRight: 10,
    },

    companyInfo: {
      flex: 1,
    },

    companyName: {
      color: "#FFFFFF",
      fontFamily: Fonts.pBold,
      fontSize: width * 0.035,
    },

    companyType: {
      color: "#FFFFFF",
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.028,
    },

    companyAddress: {
      width: "43%",
      borderLeftWidth: 1,
      borderColor: "#FFFFFF55",
      paddingLeft: 9,
      flexDirection: "row",
      gap: 5,
    },

    addressText: {
      color: "#FFFFFF",
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.019,
      flex: 1,
    },

    divider: {
      height: 1.5,
      backgroundColor: "#CCCCCC",
      marginVertical: 10,
      marginHorizontal: 7,
    },

    infoRow: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: 6,
      padding: 12,
      marginBottom: 7,
      minHeight: 51,
      gap: 10,
    },

    infoContent: {
      flex: 1,
    },

    label: {
      color: "#777777",
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.024,
    },

    value: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.029,
    },

    detail: {
      color: Colors.primaria3,
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.025,
    },

    notice: {
      backgroundColor: "#D8D8D8",
      borderRadius: 6,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },

    noticeText: {
      flex: 1,
      color: Colors.primaria3,
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.024,
    },

    buttons: {
      flexDirection: "row",
      gap: 7,
      marginTop: 12,
    },

    buttonBack: {
      flex: 1,
      height: 43,
      backgroundColor: "#FFFFFF",
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      elevation: 3,
    },

    buttonNext: {
      flex: 1,
      height: 43,
      backgroundColor: Colors.primaria3,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 7,
      elevation: 3,
    },

    buttonBackText: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.035,
    },

    buttonNextText: {
      color: "#FFFFFF",
      fontFamily: Fonts.pBold,
      fontSize: width * 0.035,
    },
  });
}

function ConfirmationContent() {
  const { width, height } = useDimension();
  const style = styleContent(width, height);

  const params = useLocalSearchParams<{
    agenda?: string;
    servicoId?: string;
    servico?: string;
    duracao?: string;
    preco?: string;
    data?: string;
    horario?: string;
    nome?: string;
    email?: string;
    telefone?: string;
  }>();

  const [enviando, setEnviando] = React.useState(false);

  function formatarData(valor?: string) {
    if (!valor) return "Data não informada";

    const partes = valor.split("-");
    if (partes.length !== 3) return valor;

    const data = new Date(
      Number(partes[0]),
      Number(partes[1]) - 1,
      Number(partes[2])
    );

    return data.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  async function finalizar() {
    if (enviando) return;

    if (
      !params.servicoId ||
      !params.data ||
      !params.horario ||
      !params.nome ||
      !params.email ||
      !params.telefone
    ) {
      Alert.alert(
        "Dados incompletos",
        "Retorne e preencha todas as etapas."
      );
      return;
    }

    // Ainda falta integrar o endpoint de criação.
    // Não navegar para success antes da API confirmar.
    Alert.alert(
      "Integração pendente",
      "A tela está pronta. Falta conectar a criação do agendamento ao backend."
    );
  }

  return (
    <View style={style.background}>
      <ScrollView
        style={style.scroll}
        contentContainerStyle={style.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={style.backIcon}
          onPress={() => router.back()}
        >
          <ArrowLeft size={29} color={Colors.primaria3} />
        </Pressable>

        <View style={style.progress}>
          {[1, 2, 3, 4].map((etapa) => (
            <React.Fragment key={etapa}>
              {etapa > 1 && (
                <View style={style.progressLine} />
              )}
              <View style={style.circle} />
            </React.Fragment>
          ))}
        </View>

        <Text style={style.title}>
          Confira os detalhes{"\n"}
          do seu agendamento
        </Text>

        <Text style={style.description}>
          Veja todas as informações do seu
          agendamento abaixo e finalize com a
          confirmação.
        </Text>

        <View style={style.card}>
          <View style={style.company}>
            <View style={style.avatar} />

            <View style={style.companyInfo}>
              <Text style={style.companyName}>
                Barbearia NJ
              </Text>
              <Text style={style.companyType}>
                Corte e barba
              </Text>
            </View>

            <View style={style.companyAddress}>
              <MapPin size={13} color="#FFFFFF" />
              <Text style={style.addressText}>
                Rua dos Bobos, 67
                {"\n"}Rosolem - Hortolândia/SP
              </Text>
            </View>
          </View>

          <View style={style.divider} />

          <View style={style.infoRow}>
            <Scissors size={23} color={Colors.primaria3} />

            <View style={style.infoContent}>
              <Text style={style.label}>Serviço</Text>
              <Text style={style.value}>
                {params.servico || "Não informado"}
              </Text>
            </View>

            <Text style={style.detail}>
              {params.duracao || "--"} |{" "}
              {params.preco || "--"}
            </Text>
          </View>

          <View style={style.infoRow}>
            <CalendarDays
              size={23}
              color={Colors.primaria3}
            />

            <View style={style.infoContent}>
              <Text style={style.label}>Data</Text>
              <Text style={style.value}>
                {formatarData(params.data)}
              </Text>
            </View>
          </View>

          <View style={style.infoRow}>
            <Clock3 size={23} color={Colors.primaria3} />

            <View style={style.infoContent}>
              <Text style={style.label}>Horário</Text>
              <Text style={style.value}>
                {params.horario || "--"}
              </Text>
            </View>
          </View>

          <View style={style.divider} />

          <View style={style.infoRow}>
            <UserRound
              size={25}
              color={Colors.primaria3}
            />

            <View style={style.infoContent}>
              <Text style={style.label}>Seus dados</Text>
              <Text style={style.value}>
                {params.nome || "Não informado"}
              </Text>
              <Text style={style.detail}>
                {params.email || ""}
              </Text>
              <Text style={style.detail}>
                {params.telefone || ""}
              </Text>
            </View>
          </View>

          <View style={style.notice}>
            <Info size={17} color={Colors.primaria3} />

            <Text style={style.noticeText}>
              Você receberá um e-mail com todos os
              detalhes do seu agendamento após a
              confirmação pelo servidor.
            </Text>
          </View>
        </View>

        <View style={style.buttons}>
          <Pressable
            style={style.buttonBack}
            onPress={() => router.back()}
          >
            <Text style={style.buttonBackText}>
              Voltar
            </Text>
          </Pressable>

          <Pressable
            style={style.buttonNext}
            onPress={finalizar}
            disabled={enviando}
          >
            <Text style={style.buttonNextText}>
              Finalizar
            </Text>
            <Check size={17} color="#FFFFFF" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default function Confirmation() {
  return (
    <MainLayout>
      <ConfirmationContent />
    </MainLayout>
  );
}
