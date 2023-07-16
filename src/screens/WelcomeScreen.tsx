import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Box, Button, Heading, HStack, Text, VStack } from 'native-base';
import { grass, playerScreenbg, welcomeScreenbg } from '../assets/images';
import { Image, SvgXml } from 'react-native-svg';
import { arrow, cricketball, football, tennis } from '../assets/Svgs/SvgGroup';

export const WelcomeScreen = (props: any) => {
    return (
        <ImageBackground source={welcomeScreenbg} style={{ flex: 1, zIndex: 10 }}>
            {/* <ImageBackground source={playerScreenbg} style={{ height: 650, width: 650, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', zIndex: 12 }}> */}
            <Box flex={1} safeAreaTop>
                <Box justifyContent={'space-between'}>
                    <Text
                        mt={2}
                        mb={5}
                        alignSelf={'center'}
                        alignItems={'center'}
                        color={'#fff'}
                        // fontFamily={'Metropolis-Regular'}
                        fontSize={'4xl'}
                    >
                        SPORTAIN
                    </Text>
                    <Text
                        alignSelf={'center'}
                        alignItems={'center'}
                        color={'#fff'}
                        fontSize={'2xl'}>
                        PICK YOUR PASSION
                    </Text>
                    <Heading
                        alignSelf={'center'}
                        alignItems={'center'}
                        color={'#fff'}
                        fontSize={'4xl'}>
                        LIVE THE ACTION!
                    </Heading>
                </Box>
            </Box>
            <ImageBackground source={grass} resizeMethod={'auto'} style={{ flex: 1, top: '25%' }}>
                <Box bottom={'28%'}>

                    <HStack space={10} alignSelf={'center'} mb={'10%'} >
                        <TouchableOpacity>

                            <VStack justifyContent={'center'} alignItems={'center'}>
                                <SvgXml xml={football} />
                                <Text fontWeight={'bold'} color={'#fff'}>FOOTBALL</Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity>

                            <VStack justifyContent={'center'} alignItems={'center'}>
                                <SvgXml xml={cricketball} />
                                <Heading fontSize={'lg'} fontWeight={'bold'} color={'#fff'}>CRICKET</Heading>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity>

                            <VStack justifyContent={'center'} alignItems={'center'}>
                                <SvgXml xml={tennis} />
                                <Text color={'#fff'}>TENNIS</Text>
                            </VStack>
                        </TouchableOpacity>

                    </HStack>
                    <Button
                        onPress={() => props.navigation.navigate('LandingPage')}
                        p={4}
                        mb={'15%'}
                        _pressed={{ bg: '#50B05F95' }}
                        bg={'#50B05F'}
                        alignSelf={'center'}
                        w={'75%'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <HStack space={3} justifyContent={'center'} alignItems={'center'}>
                            <Text fontWeight={'bold'} color={'#fff'} fontSize={'md'}>
                                GET STARTED!
                            </Text>
                            <SvgXml xml={arrow} style={{ top: 1 }} />
                        </HStack>
                    </Button>
                </Box>
            </ImageBackground>

            {/* </ImageBackground> */}
        </ImageBackground>
    );
};
