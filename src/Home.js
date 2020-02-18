import React from 'react';
import info from '../assets/imgs/info';
import { SvgXml } from 'react-native-svg';
import { Header } from 'react-native-elements';
import CardButtonHome from '../components/CardButtonHome';
import CardGame from '../assets/imgs/CardGame';
import InconGame from '../assets/imgs/IconGame';

const Home = () => {

  renderCardGame = () => {
    <CardButtonHome />

  }


  return (
    <Header
      backgroundColor={'#F07E26'}
      rightComponent={<SvgXml xml={info} />}
      centerComponent={{
        style: { color: '#fff', fontSize: 20 },
        text: 'GameSoft',
      }}
    />
  );
};

export default Home;
