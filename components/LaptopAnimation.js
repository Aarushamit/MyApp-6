import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Image } from 'react-native';

export default class LaptopAnimation extends React.Component {
    render() {
        return (
            //<View style={{ flex: 1, width: "40%", height: "40%" }}>
            <LottieView source={require('../assets/animatedlaptop.json')} style={{ width: 220, height: 220 }}
                autoPlay
                loop
            />
            // </View>
        )
    }
}