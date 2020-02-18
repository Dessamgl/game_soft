import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';

function CardButtonHome({ card, icon }) {
    return (
        <TouchableOpacity>
            <SvgXml xml={card} style={styles.card} />
            <Text style={styles.title} />
            <SvgXml xml={icon} style={styles.icon} />
            <Text style={styles.text} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 288,
        alignItens: "center",
    },
    title: {
        color: '#fff',
    },
    icon: {

    },
    text: {
        color: '#fff',
    },
});

export default CardButtonHome;

