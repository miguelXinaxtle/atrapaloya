import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Logo} from 'components';

const InformationScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.bodyContainer}>
        <Text type="title">Bienvenido</Text>
        <Text type="body">
          Viaja entre el mundo real y el mundo virtual de Pokémon con esta
          aplicación, para dispositivos iPhone y Android. Con esta aplicación
          descubrirás Pokémon en un mundo completamente nuevo, ¡tu propio mundo!
          ademas te da la oportunidad de explorar lugares reales y de buscar
          Pokémon por todos lados. Más y más Pokémon siguen apareciendo por todo
          el mundo, incluyendo Pokémon legendarios únicos y poderosos.
        </Text>
      </View>
    </View>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bodyContainer: {
    marginTop: 40,
  },
});
