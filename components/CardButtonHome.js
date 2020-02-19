import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

function CardButtonHome({ card, icon, text, title }) {
    return (
        <TouchableOpacity>
            {/* <View backgroundColor={red}> */}
            <SvgXml width={"100%"} top={20} xml={card} />
            <Text style={styles.title}> {`${title}`} </Text>
            <SvgXml width={"600"} position={"absolute"} bottom={70} xml={icon} />
            <Text style={styles.text}> {`${text}`} </Text>
            {/* </View> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        left: 95,
        bottom: 95,
        position: "absolute",
        maxWidth: 200
    },
    text: {
        color: '#fff',
        left: 95,
        bottom: 20,
        position: "relative",
        maxWidth: 200
    },
});

// const card = styled.View`


// `

export default CardButtonHome;

