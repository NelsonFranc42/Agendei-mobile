import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StatusBar } from "react-native";

import * as SplashScreen from "expo-splash-screen";

import { Fonts } from "@/constants/fonts";
import { Colors } from "@/constants/colors";

 SplashScreen.preventAutoHideAsync(); 

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    poppinsRegular: require("@/assets/fonts/Poppins-Regular.ttf"),
    poppinsMedium: require("@/assets/fonts/Poppins-Medium.ttf"),
    poppinsSBold: require("@/assets/fonts/Poppins-SemiBold.ttf"),
    poppinsBold: require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  /* Para que as telas não sejam apresentadas se as fontes ainda não estiverem prontas */


  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  } 

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(dashboard)" />
    </Stack>
  );
}
