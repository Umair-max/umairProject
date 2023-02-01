import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import Lottie from 'lottie-react-native';

import colors from '../config/colors';

export default function UploadScreen({onDone, progress= 0, visible=false}) {
  return (
    <Modal visible={visible}>
        <View style={styles.container}>
            {progress < 1 ? 
                <Progress.Bar 
                    color={colors.primaryRed} 
                    width={200} 
                    progress={progress}
                /> : 
                <Lottie 
                source={require('../assets/animation/done.json')}
                loop={false}
                autoPlay
                style={styles.animation}
                onAnimationFinish={onDone}
                />
            }
            
            {/* <AppText>{progress* 100}%</AppText> */}
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    animation: {
        width: 150
    }
})