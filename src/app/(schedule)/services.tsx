import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { useDimension } from "@/hooks/useDimension";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ArrowLeft, Clock3, MapPin } from "lucide-react-native";
import { MainLayout } from "@/components/layout-noimages";

const servicos = [
  {
    id: 1,
    nome: "Corte de cabelo",
    duracao: "30 minutos",
    preco: "R$35,00",
  },
  {
    id: 2,
    nome: "Sobrancelha",
    duracao: "10 minutos",
    preco: "R$15,00",
  },
  {
    id: 3,
    nome: "Barba",
    duracao: "20 minutos",
    preco: "R$20,00",
  },
];

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
    scrollContent: {
      alignItems: "center",
      paddingTop: height * 0.025,
      paddingBottom: 15,
    },
    header: {
      width: "100%",
      height: height * 0.105,
    },
    backIcon: {
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
    },
    progress: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 5,
    },
    progressCircle: {
      width: 22,
      height: 22,
      borderRadius: 11,
      backgroundColor: "#B8B8B8",
    },
    progressActive: {
      backgroundColor: Colors.primaria3,
    },
    progressLine: {
      width: width * 0.12,
      height: 2,
      backgroundColor: "#C5C5C5",
    },
    titleContent: {
      width: "100%",
      paddingHorizontal: width * 0.025,
      marginTop: height * 0.015,
      marginBottom: height * 0.02,
    },
    title: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.073,
      lineHeight: width * 0.105,
      marginBottom: 12,
    },
    description: {
      color: Colors.secundaria5,
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.041,
      lineHeight: width * 0.059,
    },
    card: {
      width: "100%",
      backgroundColor: "#E9E9E9",
      borderRadius: 10,
      padding: width * 0.045,
    },

    company: {
      width: "100%",
      backgroundColor: "#FFFFFF",
      borderRadius: 7,
      padding: 13,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 13,
    },

    companyImage: {
      width: 51,
      height: 51,
      borderRadius: 26,
      backgroundColor: "#969696",
      marginRight: 12,
    },
    companyName: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.041,
    },
    companyType: {
      color: Colors.primaria3,
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.032,
    },
    infoContent: {
      flexDirection: "row",
      gap: 8,
      marginBottom: 16,
    },
    infoCard: {
      flex: 1,
      minHeight: 87,
      backgroundColor: "#FFFFFF",
      borderRadius: 6,
      padding: 10,
    },
    infoTitle: {
      flexDirection: "row",
      alignItems: "center",
      gap: 7,
      marginBottom: 7,
    },
    infoTitleText: {
      color: Colors.primaria3,
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.027,
    },
    infoDescription: {
      color: "#666666",
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.025,
      lineHeight: 15,
    },
    sectionTitle: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 13,
      paddingHorizontal: 7,
    },
    sectionText: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.04,
    },
    sectionLine: {
      flex: 1,
      height: 2,
      backgroundColor: Colors.primaria3,
      marginLeft: 10,
    },
    service: {
      width: "100%",
      minHeight: 43,
      backgroundColor: "#FFFFFF",
      borderRadius: 6,
      marginBottom: 7,
      paddingHorizontal: 14,
      paddingVertical: 7,
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "transparent",
    },
    serviceSelected: {
      borderColor: Colors.primaria3,
      backgroundColor: "#F3FAF8",
    },
    serviceCircle: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: "#D8D8D8",
      marginRight: 14,
      alignItems: "center",
      justifyContent: "center",
    },
    serviceCircleSelected: {
      backgroundColor: Colors.primaria3,
    },
    serviceName: {
      color: "#111111",
      fontFamily: Fonts.pBold,
      fontSize: width * 0.028,
    },
    serviceDetails: {
      color: "#333333",
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.027,
    },
    buttons: {
      width: "100%",
      flexDirection: "row",
      gap: 7,
      paddingTop: 10,
      paddingBottom: 12,
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

function SelectServiceContent() {
  const { width, height } = useDimension();
  const style = styleContent(width, height);
  const [servicoSelecionado, setServicoSelecionado] = React.useState<
    number | null
  >(null);

  function proximo() {
  if (servicoSelecionado === null) {
    return;
  }

  const servico = servicos.find(
    (item) => item.id === servicoSelecionado
  );

  if (!servico) return;

  router.push({
    pathname: "./datetime",
    params: {
      servicoId: String(servico.id),
      servico: servico.nome,
      duracao: servico.duracao,
      preco: servico.preco,
    },
  });
}

  return (
    <View style={style.background}>
      <ScrollView
        style={style.scroll}
        contentContainerStyle={style.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.header}>
          <Pressable style={style.backIcon} onPress={() => router.back()}>
            <ArrowLeft size={29} color={Colors.primaria3} />
          </Pressable>

          <View style={style.progress}>
            {[1, 2, 3, 4].map((etapa) => (
              <React.Fragment key={etapa}>
                {etapa > 1 && <View style={style.progressLine} />}

                <View
                  style={[
                    style.progressCircle,

                    etapa === 1 && style.progressActive,
                  ]}
                />
              </React.Fragment>
            ))}
          </View>
        </View>

        <View style={style.titleContent}>
          <Text style={style.title}>
            Confira as{"\n"}
            informações e{"\n"}
            selecione um serviço
          </Text>

          <Text style={style.description}>
            Confira os detalhes da agenda e selecione um dos serviços
            disponíveis abaixo
          </Text>
        </View>

        <View style={style.card}>
          <View style={style.company}>
            <View style={style.companyImage} />

            <View>
              <Text style={style.companyName}>Barbearia NJ</Text>

              <Text style={style.companyType}>Corte e barba</Text>
            </View>
          </View>

          <View style={style.infoContent}>
            <View style={style.infoCard}>
              <View style={style.infoTitle}>
                <MapPin size={15} color={Colors.primaria3} />

                <Text style={style.infoTitleText}>Localização</Text>
              </View>

              <Text style={style.infoDescription}>
                Rua dos Bobos, 67
                {"\n"}Rosolem - Hortolândia/
                {"\n"}SP
              </Text>
            </View>

            <View style={style.infoCard}>
              <View style={style.infoTitle}>
                <Clock3 size={15} color={Colors.primaria3} />

                <Text style={style.infoTitleText}>Funcionamento</Text>
              </View>

              <Text style={style.infoDescription}>
                Segunda a Sábado
                {"\n"}08:00 - 19:00
              </Text>
            </View>
          </View>

          <View style={style.sectionTitle}>
            <Text style={style.sectionText}>Serviços disponíveis</Text>

            <View style={style.sectionLine} />
          </View>

          {servicos.map((servico) => {
            const selecionado = servicoSelecionado === servico.id;

            return (
              <Pressable
                key={servico.id}
                style={[style.service, selecionado && style.serviceSelected]}
                onPress={() => setServicoSelecionado(servico.id)}
              >
                <View
                  style={[
                    style.serviceCircle,

                    selecionado && style.serviceCircleSelected,
                  ]}
                >
                  {selecionado && <Text style={{ color: "#FFFFFF" }}>✓</Text>}
                </View>

                <View>
                  <Text style={style.serviceName}>{servico.nome}</Text>

                  <Text style={style.serviceDetails}>
                    {servico.duracao} | {servico.preco}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        <View style={style.buttons}>
          <Pressable style={style.buttonBack} onPress={() => router.back()}>
            <Text style={style.buttonBackText}>Voltar</Text>
          </Pressable>

          <Pressable
            style={[
              style.buttonNext,

              {
                opacity: servicoSelecionado === null ? 0.65 : 1,
              },
            ]}
            onPress={proximo}
          >
            <Text style={style.buttonNextText}>Próximo</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default function SelectService() {
  return (
    <MainLayout>
      <SelectServiceContent />
    </MainLayout>
  );
}
