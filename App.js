import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import RootNavigation from "./src/components/navigation/RootNavigation"
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper"
import {
  useFonts,
  Montserrat_300Ligth,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"
import { AuthProvider } from './src/context/AuthContext';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#58b14a',   // Cambiar a gris
    secondary: 'black',  // Cambiar a negro
  },
}

export default function App() {
  const [fontLoaded, fontError] = useFonts({
    Montserrat_300Ligth,
    Montserrat_400Regular,
    Montserrat_700Bold,
  })
  if (!fontLoaded && !fontError) return null

  return (
    <AuthProvider>
    <PaperProvider theme={theme}>
      <RootNavigation />
    </PaperProvider>
    </AuthProvider>
  );
}
