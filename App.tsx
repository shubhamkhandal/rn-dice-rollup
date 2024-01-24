import React, {PropsWithChildren, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import DiceOne from './assets/One.png';
import DiceTwo from './assets/Two.png';
import DiceThree from './assets/Three.png';
import DiceFour from './assets/Four.png';
import DiceFive from './assets/Five.png';
import DiceSix from './assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <>
      <View>
        <Image style={styles.diceImg} source={imageUrl} />
      </View>
    </>
  );
};

function App(): React.JSX.Element {
  const [diceImg, setDiceImg] = useState<ImageSourcePropType>(DiceOne);

  const rollingToDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);

    switch (randomNumber) {
      case 1:
        setDiceImg(DiceOne);
        break;
      case 2:
        setDiceImg(DiceTwo);
        break;
      case 3:
        setDiceImg(DiceThree);
        break;
      case 4:
        setDiceImg(DiceFour);
        break;
      case 5:
        setDiceImg(DiceFive);
        break;
      case 6:
        setDiceImg(DiceSix);
        break;
      default:
        setDiceImg(DiceOne);
        break;
    }

    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };
  return (
    <>
      <StatusBar backgroundColor={'#5172ef'} />
      <SafeAreaView style={styles.container}>
        <View>
          <Dice imageUrl={diceImg} />
        </View>
        <Pressable onPress={rollingToDice} style={styles.actionBtn}>
          <Text style={styles.btnTxt}>Dice me</Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceImg: {
    width: 140,
    height: 140,
  },
  actionBtn: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 15,
    position: 'absolute',
    bottom: 20,
  },
  btnTxt: {color: '#000'},
});

export default App;
