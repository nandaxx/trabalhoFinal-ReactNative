import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    StatusBar,
    Text,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Item = ({ item }: { item: { image: string } }) => {
    return (
        <View style={styles.slide}>
            <Image source={{ uri: item.image }} style={{ width: 390, height: 290 }} />
        </View>
    );
};

const CarouselHome = () => {
    const carousel = [
        {
            image: 'https://cdn.discordapp.com/attachments/984880566145015868/994426682645688383/3.png',
        },
        {
            image: 'https://cdn.discordapp.com/attachments/959624576042696754/994403584840040519/Na_compra_de_dois_livros.png',
        },
        {
            image: 'https://cdn.discordapp.com/attachments/984880566145015868/994426651595264020/2.png',
        },
 
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor={'rgba(0, 0, 0, 0.3)'}
                    barStyle={'light-content'}
                />
                <Carousel
                    data={carousel}
                    renderItem={Item}
                    sliderWidth={390}
                    itemWidth={390}
                    inactiveSlideScale={0.95}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    activeAnimationType={'spring'}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
    },
    slide: {
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 280,
    },
    title: {
        fontSize: 60,
        paddingVertical: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    scrollview: {
        flex: 1,
    },
});

export default CarouselHome;