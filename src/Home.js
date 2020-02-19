import React from 'react';
import info from '../assets/imgs/info';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Header } from 'react-native-elements';
import CardButtonHome from '../components/CardButtonHome';
import blue from '../assets/imgs/CardGame/blue';
import rectangle from '../assets/imgs/CardGame/rectangle'
import iconTI from '../assets/imgs/IconGame/iconTI'

const Home = () => {

  renderCardGame = () => {
    return (
      <View>
        <CardButtonHome
          card={blue}
          icon={iconTI}
          title={"gggggggggggg"}
          text={'tchau vfdrgrg grgrg'}
        />
        <CardButtonHome
          card={rectangle}
          icon={iconTI}
        />

        <CardButtonHome
          card={rectangle}
          icon={iconTI}
        />
      </View>
    )
  }


  return (
    <>
      <Header
        backgroundColor={'#F07E26'}
        rightComponent={<SvgXml xml={info} />}
        centerComponent={{
          style: { color: '#fff', fontSize: 20 },
          text: 'GameSoft',
        }}
      />
      {renderCardGame()}
    </>
  );
};

export default Home;
