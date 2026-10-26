
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { useDimension } from "@/hooks/useDimension";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react-native";
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

const horarios = [
  "09:00", "09:30", "10:00",
  "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00",
  "14:30", "15:00", "15:30",
];

const diasSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

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
      backgroundColor: "#B8B8B8",
    },

    activeCircle: {
      backgroundColor: Colors.primaria3,
    },

    progressLine: {
      width: width * 0.12,
      height: 2,
      backgroundColor: "#B8B8B8",
    },

    activeLine: {
      backgroundColor: Colors.primaria3,
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
      fontSize: width * 0.04,
      lineHeight: width * 0.058,
      marginBottom: 20,
    },

    card: {
      width: "100%",
      backgroundColor: "#E9E9E9",
      borderRadius: 9,
      padding: width * 0.045,
    },

    section: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
      marginTop: 4,
    },

    sectionText: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.039,
    },

    sectionLine: {
      flex: 1,
      height: 1.5,
      backgroundColor: Colors.primaria3,
      marginLeft: 9,
    },

    calendar: {
      backgroundColor: "#FFFFFF",
      borderRadius: 6,
      padding: 12,
      marginBottom: 15,
    },

    calendarHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12,
    },

    monthText: {
      color: Colors.primaria3,
      fontFamily: Fonts.pBold,
      fontSize: width * 0.035,
      textTransform: "capitalize",
    },

    weekRow: {
      flexDirection: "row",
      marginBottom: 8,
    },

    weekText: {
      width: "14.2857%",
      textAlign: "center",
      fontFamily: Fonts.pBold,
      color: "#666666",
      fontSize: width * 0.028,
    },

    days: {
      flexDirection: "row",
      flexWrap: "wrap",
    },

    day: {
      width: "14.2857%",
      height: 35,
      alignItems: "center",
      justifyContent: "center",
    },

    daySelected: {
      backgroundColor: Colors.primaria3,
      borderRadius: 18,
      width: 32,
      height: 32,
      alignItems: "center",
      justifyContent: "center",
    },

    dayText: {
      color: "#333333",
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.032,
    },

    times: {
      backgroundColor: "#FFFFFF",
      borderRadius: 6,
      padding: 12,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      rowGap: 10,
    },

    timeButton: {
      width: "30%",
      height: 30,
      borderRadius: 5,
      backgroundColor: "#E9E9E9",
      alignItems: "center",
      justifyContent: "center",
    },

    timeSelected: {
      backgroundColor: Colors.primaria3,
    },

    timeText: {
      color: "#333333",
      fontFamily: Fonts.pRegular,
      fontSize: width * 0.029,
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
      elevation: 3,
    },

    buttonText: {
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

function DateTimeContent() {
  const { width, height } = useDimension();
  const style = styleContent(width, height);

  const params = useLocalSearchParams<{
    agenda?: string;
    servicoId?: string;
    servico?: string;
    duracao?: string;
    preco?: string;
  }>();

  const hoje = new Date();

  const [mes, setMes] = React.useState(
    new Date(hoje.getFullYear(), hoje.getMonth(), 1)
  );

  const [data, setData] = React.useState("");
  const [horario, setHorario] = React.useState("");

  const primeiroDia = new Date(
    mes.getFullYear(),
    mes.getMonth(),
    1
  ).getDay();

  const totalDias = new Date(
    mes.getFullYear(),
    mes.getMonth() + 1,
    0
  ).getDate();

  const dias = [
    ...Array(primeiroDia).fill(null),
    ...Array.from({ length: totalDias }, (_, i) => i + 1),
  ];

  function mudarMes(valor: number) {
    setMes(
      new Date(mes.getFullYear(), mes.getMonth() + valor, 1)
    );
    setData("");
    setHorario("");
  }

  function selecionarDia(dia: number) {
    const dataEscolhida = new Date(
      mes.getFullYear(),
      mes.getMonth(),
      dia
    );

    if (dataEscolhida < new Date(
      hoje.getFullYear(), hoje.getMonth(), hoje.getDate()
    )) {
      return;
    }

    const dataFormatada =
      `${mes.getFullYear()}-${String(mes.getMonth() + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;

    setData(dataFormatada);
    setHorario("");
  }

  function proximo() {
    if (!data || !horario) {
      Alert.alert(
        "Atenção",
        "Selecione uma data e um horário."
      );
      return;
    }

    router.push({
      pathname: "./personal-info",
      params: {
        ...params,
        data,
        horario,
      },
    });
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
                <View
                  style={[
                    style.progressLine,
                    etapa <= 2 && style.activeLine,
                  ]}
                />
              )}

              <View
                style={[
                  style.circle,
                  etapa <= 2 && style.activeCircle,
                ]}
              />
            </React.Fragment>
          ))}
        </View>

        <Text style={style.title}>
          Selecione o horário e{"\n"}
          a data do seu{"\n"}
          agendamento
        </Text>

        <Text style={style.description}>
          Escolha um dia e um horário disponível
          de sua preferência abaixo.
        </Text>

        <View style={style.card}>
          <View style={style.section}>
            <Text style={style.sectionText}>
              Dias disponíveis
            </Text>
            <View style={style.sectionLine} />
          </View>

          <View style={style.calendar}>
            <View style={style.calendarHeader}>
              <Pressable onPress={() => mudarMes(-1)}>
                <ChevronLeft
                  size={22}
                  color={Colors.primaria3}
                />
              </Pressable>

              <Text style={style.monthText}>
                {mes.toLocaleDateString("pt-BR", {
                  month: "long",
                  year: "numeric",
                })}
              </Text>

              <Pressable onPress={() => mudarMes(1)}>
                <ChevronRight
                  size={22}
                  color={Colors.primaria3}
                />
              </Pressable>
            </View>

            <View style={style.weekRow}>
              {diasSemana.map((dia, index) => (
                <Text key={index} style={style.weekText}>
                  {dia}
                </Text>
              ))}
            </View>

            <View style={style.days}>
              {dias.map((dia, index) => {
                if (dia === null) {
                  return (
                    <View key={index} style={style.day} />
                  );
                }

                const dataAtual =
                  `${mes.getFullYear()}-${String(mes.getMonth() + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;

                const selecionado = data === dataAtual;

                return (
                  <Pressable
                    key={index}
                    style={style.day}
                    onPress={() => selecionarDia(dia)}
                  >
                    <View
                      style={
                        selecionado
                          ? style.daySelected
                          : undefined
                      }
                    >
                      <Text
                        style={[
                          style.dayText,
                          selecionado && { color: "#FFFFFF" },
                        ]}
                      >
                        {dia}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View style={style.section}>
            <Text style={style.sectionText}>
              Horários disponíveis
            </Text>
            <View style={style.sectionLine} />
          </View>

          <View style={style.times}>
            {horarios.map((hora) => {
              const selecionado = horario === hora;

              return (
                <Pressable
                  key={hora}
                  style={[
                    style.timeButton,
                    selecionado && style.timeSelected,
                  ]}
                  onPress={() => {
                    if (data) setHorario(hora);
                  }}
                >
                  <Text
                    style={[
                      style.timeText,
                      selecionado && { color: "#FFFFFF" },
                    ]}
                  >
                    {hora}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={style.buttons}>
          <Pressable
            style={style.buttonBack}
            onPress={() => router.back()}
          >
            <Text style={style.buttonText}>Voltar</Text>
          </Pressable>

          <Pressable
            style={style.buttonNext}
            onPress={proximo}
          >
            <Text style={style.buttonNextText}>
              Próximo
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default function DateTime() {
  return (
    <MainLayout>
      <DateTimeContent />
    </MainLayout>
  );
}
