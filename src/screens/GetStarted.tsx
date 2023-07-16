import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
import { bg1, bg2, bg3, bg4, bg5, LandingBg } from '../assets/images';
import { Box, Heading, HStack, Text, Button } from 'native-base';
import { SvgXml } from 'react-native-svg';
import { arrow, logo } from '../assets/Svgs/SvgGroup';
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import React, { useState, useRef } from 'react';

export const GetStarted = (props: any) => {
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const scrollViewRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const stopScrollPosition = 10; // Example: Stop at 200 pixels

    const handleScroll = (event: any) => {
        const { contentOffset } = event.nativeEvent;
        const currentScrollPosition = contentOffset.y;

        if (currentScrollPosition >= stopScrollPosition) {
            setScrollPosition(stopScrollPosition);
        } else {
            setScrollPosition(currentScrollPosition);
        }
    };
    return (
        <Box flex={1} bg={'#000'} safeAreaTop >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                style={{ flex: 1 }}

            >
                <ImageBackground
                    resizeMode={'contain'}
                    source={bg1}
                    style={{ height: heightPercentageToDP(100), zIndex: 2 }}>
                    <Box >
                        <SvgXml xml={logo} style={{ alignSelf: 'center' }} />
                        <Heading fontSize={'5xl'} color={'#fff'} alignSelf={'center'}>
                            SPORTAIN
                        </Heading>
                        <Box mt={'10%'} px={10}>
                            <Text color={'#fff'} fontSize={'lg'}>
                                TIME FOR A GAME CHANGER
                            </Text>
                            <Heading fontSize="4xl" w="100%" color="#59BB5D">
                                EMBRACE {'\n'}
                                <Text style={{ color: 'white' }}>SPORTAIN'S {'\n'}</Text>
                                NEW {'\n'}
                                EXPERIENCE
                            </Heading>
                        </Box>
                    </Box>
                </ImageBackground>
                <ImageBackground
                    source={bg2}
                    resizeMode={'contain'}
                    style={{ height: heightPercentageToDP(100), zIndex: 10, bottom: '9%' }}>
                    <Box
                        justifyContent={'center'}
                        alignItems={'center'}
                        alignSelf={'flex-end'}
                        top={'62%'}


                    // left={'15%'}
                    >
                        <Text fontSize={'lg'} color={'#FFFFFF'}>
                            CONNECT AND ENGAGE!
                        </Text>
                        <Heading
                            fontSize="4xl"

                            // right={12}
                            px={12}
                            right={2}
                            color="#59BB5D"
                            textAlign="right"
                            lineHeight={40}>
                            <Text style={{ color: 'white' }}>IMMERSE</Text> {'\n'}
                            IN YOUR COMMUNITY
                        </Heading>
                    </Box>
                </ImageBackground>
                <ImageBackground
                    resizeMode={'contain'}
                    source={bg3}
                    style={{ height: heightPercentageToDP(100) }}>
                    <Box w={'70%'} left={20} bottom={'5%'}>
                        <Text
                            fontWeight={'bold'}
                            fontSize={'lg'}
                            color={'#fff'}
                            textAlign={'right'}>
                            "LIVE CRICKET! DIRECTLY CONNECT WITH STARS."
                        </Text>
                    </Box>
                    <Box top={'56%'} px={10}>
                        <Heading fontSize="4xl" w="70%" color="#59BB5D" mb={5}>
                            <Text style={{ color: 'white' }}>YOUR</Text> {'\n'}
                            VOICE {'\n'}
                            MATTERS
                        </Heading>
                        <Text color={'#fff'} fontWeight={'bold'} fontSize={'xl'}>
                            INTERACTIVE EXPERIENCE
                        </Text>
                        <Text w={'85%'} color={'#fff'} fontSize={'lg'}>
                            {`"Be more than a spectator! Engage, celebrate & analyze."`.toUpperCase()}
                        </Text>
                    </Box>
                </ImageBackground>
                <ImageBackground
                    resizeMode={'contain'}
                    source={bg5}
                    style={{ height: heightPercentageToDP(100) }}>
                    <Box top={'50%'}>
                        <Heading
                            fontSize="4xl"
                            w="70%"
                            color="#59BB5D"
                            mb={5}
                            textAlign={'right'}
                            lineHeight={40}
                            left={20}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                TAKE {'\n'} ACTION
                            </Text>{' '}
                            {'\n'}
                            {` & unlock exclusive rewards`.toUpperCase()}
                        </Heading>

                        <Text
                            fontWeight={'bold'}
                            fontSize={'lg'}
                            color={'#fff'}
                            right={'12%'}
                            textAlign={'right'}>
                            {`Rewards and Offers:`.toUpperCase()}
                            {'\n'}
                            <Text color={'#fff'} fontWeight={'normal'}>
                                "Rewards await your passion!"
                            </Text>
                        </Text>
                    </Box>
                </ImageBackground>
                <ImageBackground
                    resizeMode={'contain'}
                    source={bg4}
                    style={{
                        height: heightPercentageToDP(90),
                        // bottom: '16%',

                    }}>
                    <Box>
                        <HStack alignSelf={'center'} mt={20} right={3}>
                            <SvgXml xml={logo} style={{ alignSelf: 'center' }} />
                            <Heading fontSize={'5xl'} color={'#fff'} alignSelf={'center'}>
                                SPORTAIN
                            </Heading>
                        </HStack>
                        <Text color={'#fff'} alignSelf={'center'} fontSize={'lg'}>
                            {`Celebrates Cricket community`.toUpperCase()}
                        </Text>
                    </Box>
                    <Text color={'#fff'} alignSelf={'center'} top={'80%'}>
                        {`@Sportain 2023`.toUpperCase()}
                    </Text>
                </ImageBackground>
            </ScrollView>
            <Button
                onPress={() => props.navigation.navigate('WhatsNext')}
                p={4}
                _pressed={{ bg: '#50B05F95' }}
                bottom={'30%'}
                // mb={'15%'}
                bg={'#50B05F'}
                alignSelf={'center'}
                w={'85%'}
                justifyContent={'center'}
                alignItems={'center'}>
                <HStack space={3} justifyContent={'center'} alignItems={'center'}>
                    <Text fontWeight={'bold'} color={'#fff'} fontSize={'md'}>
                        WHATS'S NEXT?
                    </Text>
                </HStack>
            </Button>
        </Box>
    );
};
