import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cores } from './temas';

export default function Sobre() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  function handleBack() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.voltarButton, { top: insets.top + 12 }]}
        onPress={handleBack}
      >
        <Text style={styles.voltarButtonText}>Voltar</Text>
      </Pressable>

      <Text style={styles.title}>Sobre o Agendei.com</Text>
      <Text style={styles.text}>Aqui vai o conteúdo explicando a plataforma.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  voltarButton: {
    position: 'absolute',
    left: 20,
    zIndex: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: cores.primaria,
  },
  voltarButtonText: {
    color: cores.primaria,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: cores.fundo,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: cores.primaria,
    marginBottom: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: cores.textoSecundario,
    textAlign: 'center',
  },
});
