import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LandingBg } from '../assets/images'
import { Box } from 'native-base'

export const LandingPage = () => {
    return (
        <ImageBackground source={LandingBg} style={{ flex: 1 }}>
            <Box flex={1} >

            </Box>

        </ImageBackground>
    )
}

