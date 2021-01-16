import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useNavigation} from '@react-navigation/native';

const CatchItScreen = () => {
  const navigation = useNavigation();
  const scanner = useRef(null);
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setScan(false);
    setResult(null);
  }, []);

  const onSuccess = (e) => {
    console.log('goit');
    setResult(e);
    setScan(false);
    // if (e.data.substring(0, 4) === 'http');
    // alert(e.data);
    const idPokemon = Math.floor(Math.random() * 898) + 1;
    console.log('idPokemon', idPokemon);
    navigation.navigate('pokemon', {
      idPokemon,
      canRegister: true,
    });
  };

  const onTest = async () => {
    const idPokemon = Math.floor(Math.random() * 898) + 1;
    console.log('idPokemon', idPokemon);
    navigation.navigate('pokemon', {
      idPokemon,
      canRegister: true,
    });
  };
  return !scan ? (
    <View style={styles.container}>
      {/* {result && <Text>{JSON.stringify(result, null, 2)}</Text>} */}
      <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={() => setScan(true)}>
        <Text style={styles.buttonText}>¡Comienza!</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.buttonTouchable} onPress={onTest}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity> */}
    </View>
  ) : (
    <QRCodeScanner
      ref={scanner}
      onRead={onSuccess}
      reactivate={true}
      showMarker={true}
      bottomContent={
        <>
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => setScan(false)}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </>
      }
    />
  );
};

export default CatchItScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
