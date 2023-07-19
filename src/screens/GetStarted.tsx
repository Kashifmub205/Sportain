import { ImageBackground } from 'react-native';
import { bg1, bg2, bg3, bg4, bg5 } from '../assets/images';
import { Box, Heading, HStack, Text, Button, ScrollView } from 'native-base';
import { SvgXml } from 'react-native-svg';
import { backbutton, logo } from '../assets/Svgs/SvgGroup';
import {
    heightPercentageToDP,
} from 'react-native-responsive-screen';
import React, { } from 'react';
import { metropolisBold, metropolis } from '../assets/fonts';
export const GetStarted = (props: any) => {
    return (
        <Box flex={1} bg={'#000'} safeAreaTop>

            <ScrollView flex={1}>
                <Button
                    bg={'transparent'}
                    w={'10%'}
                    _pressed={{ bg: 'rgba(255,255,255,0.1)' }}
                    onPress={() => props.navigation.goBack()}
                    top={4}
                    left={4}>
                    <SvgXml xml={backbutton} />
                </Button>
                <ImageBackground
                    resizeMode={'contain'}
                    source={bg1}
                    style={{ height: heightPercentageToDP(100), top: '0.5%' }}>
                    <Box bottom={5}>
                        <SvgXml xml={logo} style={{ alignSelf: 'center' }} />
                        <Heading
                            fontFamily={metropolisBold}
                            fontSize={'5xl'}
                            color={'#fff'}
                            alignSelf={'center'}>
                            SPORTAIN
                        </Heading>
                        <Box mt={'10%'} px={10}>
                            <Text fontFamily={metropolis} color={'#fff'} fontSize={'lg'}>
                                TIME FOR A GAME CHANGER
                            </Text>
                            <Heading
                                fontSize="4xl"
                                w="100%"
                                fontFamily={metropolisBold}
                                color="#59BB5D">
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
                    style={{ height: heightPercentageToDP(100), bottom: '7.5%' }}>
                    <Box
                        justifyContent={'center'}
                        alignItems={'center'}
                        alignSelf={'flex-end'}
                        top={'62%'}

                    // left={'15%'}
                    >
                        <Text fontFamily={metropolis} fontSize={'lg'} color={'#FFFFFF'}>
                            CONNECT AND ENGAGE!
                        </Text>
                        <Heading
                            fontSize="4xl"
                            // right={12}
                            px={10}
                            fontFamily={metropolisBold}
                            color="#59BB5D"
                            textAlign="right"
                            lineHeight={40}>
                            <Text style={{ color: 'white' }} fontFamily={metropolisBold}>

                                IMMERSE{'\n'}
                            </Text>

                            IN YOUR COMMUNITY
                        </Heading>
                    </Box>
                </ImageBackground>
                <ImageBackground
                    resizeMode={'contain'}
                    source={bg3}
                    style={{ height: heightPercentageToDP(100), bottom: '5%' }}>
                    <Box w={'70%'} bottom={'9%'}>
                        <Text
                            fontWeight={'bold'}
                            left={20}
                            fontFamily={metropolis}
                            fontSize={'lg'}
                            color={'#fff'}
                            textAlign={'right'}>
                            "LIVE CRICKET! DIRECTLY CONNECT WITH STARS."
                        </Text>
                    </Box>
                    <Box top={'56%'} px={10}>
                        <Heading
                            fontFamily={metropolisBold}
                            fontSize="4xl"
                            w="70%"
                            color="#59BB5D"
                            mb={5}>
                            <Text fontFamily={metropolisBold} style={{ color: 'white' }}>
                                YOUR
                            </Text>{' '}
                            {'\n'}
                            VOICE {'\n'}
                            MATTERS
                        </Heading>
                        <Text
                            fontFamily={metropolisBold}
                            color={'#fff'}
                            fontWeight={'bold'}
                            fontSize={'xl'}>
                            INTERACTIVE EXPERIENCE
                        </Text>
                        <Text
                            w={'95%'}
                            fontFamily={metropolis}
                            color={'#fff'}
                            fontSize={'lg'}>
                            {`"Be more than a spectator! Engage, celebrate & analyze."`.toUpperCase()}
                        </Text>
                    </Box>
                </ImageBackground>
                <ImageBackground
                    resizeMode={'contain'}
                    source={bg5}
                    style={{ height: heightPercentageToDP(100), bottom: '5%' }}>
                    <Box top={'58%'}>
                        <Heading
                            fontSize="4xl"
                            w="70%"
                            color="#59BB5D"
                            mb={5}
                            fontFamily={metropolisBold}
                            ml={20}
                            textAlign={'right'}
                            lineHeight={40}
                        // left={20}
                        >
                            <Text
                                fontFamily={metropolisBold}
                                style={{ color: 'white', fontWeight: 'bold' }}>
                                TAKE {'\n'} ACTION
                            </Text>
                            {'\n'}
                            {` & unlock exclusive rewards`.toUpperCase()}
                        </Heading>

                        <Text
                            fontWeight={'bold'}
                            fontSize={'lg'}
                            color={'#fff'}
                            right={'9.5%'}
                            mt={3}
                            fontFamily={metropolisBold}
                            textAlign={'right'}>
                            {`Rewards and Offers:`.toUpperCase()}
                            {'\n'}
                            <Text
                                fontFamily={metropolis}
                                fontSize={'lg'}
                                color={'#fff'}
                                fontWeight={'normal'}>
                                {'Rewards await your passion!'.toUpperCase()}
                            </Text>
                        </Text>
                    </Box>
                </ImageBackground>
                <ImageBackground
                    resizeMode={'contain'}
                    source={bg4}
                    style={{
                        height: heightPercentageToDP(100),
                        bottom: '2%'

                    }}>
                    <Box
                        justifyContent={'space-between'}
                        height={heightPercentageToDP(100)}>
                        <Box bottom={3}>
                            <HStack alignSelf={'center'} right={3}>
                                <SvgXml xml={logo} style={{ alignSelf: 'center' }} />
                                <Heading
                                    fontFamily={metropolisBold}
                                    fontSize={'5xl'}
                                    color={'#fff'}
                                    alignSelf={'center'}>
                                    SPORTAIN
                                </Heading>
                            </HStack>
                            <Text
                                fontFamily={metropolis}
                                color={'#fff'}
                                alignSelf={'center'}
                                fontSize={'lg'}>
                                {`Celebrates Cricket community`.toUpperCase()}
                            </Text>
                        </Box>
                        <Box
                            top={'8%'}

                        >
                            <Text
                                fontFamily={metropolis}
                                color={'#fff'}
                                alignSelf={'center'}
                            >
                                {`@Sportain 2023`.toUpperCase()}
                            </Text>
                        </Box>
                    </Box>
                </ImageBackground>
            </ScrollView>
            <Button
                onPress={() => props.navigation.navigate('WhatsNext')}
                p={4}
                _pressed={{ bg: '#50B05F95' }}
                bottom={'28%'}
                // mb={'15%'}
                bg={'#50B05F'}
                alignSelf={'center'}
                w={'85%'}
                justifyContent={'center'}
                alignItems={'center'}>
                <HStack space={3} justifyContent={'center'} alignItems={'center'}>
                    <Text color={'#000'} fontFamily={metropolis} fontSize={'md'}>
                        WHAT'S NEXT?
                    </Text>
                </HStack>
            </Button>
        </Box>
    );
};
