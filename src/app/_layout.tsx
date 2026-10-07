import { Stack } from "expo-router";
import { useFonts } from "expo-font";

import { Fonts } from "@/constants/fonts";
import { Colors } from "@/constants/colors";

export default function Layout() {

    const [fonts] = useFonts({
        poppinsRegular: require('@/assets/fonts/Poppins-Regular.ttf'),
        poppinsMedium: require('@/assets/fonts/Poppins-Medium.ttf'),
        poppinsSBold: require('@/assets/fonts/Poppins-SemiBold.ttf'),
        poppinsBold: require('@/assets/fonts/Poppins-Bold.ttf'),
    })

    return (
        <Stack>
            <Stack.Screen name="(dashboard)" options={{headerShown: false}}/>
            <Stack.Screen name="(login)" options={{headerShown: false}}/>
        </Stack>
    )
}