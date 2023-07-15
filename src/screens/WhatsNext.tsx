import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import {
    Box,
    HStack,
    Text,
    Input,
    Heading,
    ScrollView,
    Button,
    Image,
} from 'native-base';
import { carousel, colors } from '../assets/images';
import { SvgXml } from 'react-native-svg';
import { copy, logo } from '../assets/Svgs/SvgGroup';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const WhatsNext = (props: any) => {
    const [code, setcode] = useState('');
    return (
        <Box flex={1} bg={'#000'} safeAreaTop>
            <ImageBackground resizeMode="contain" source={colors} style={{ flex: 1 }}>
                <Text px={10} mb={2} mt={4} color={'#FFFFFF99'}>
                    WALLET ADDRESS
                </Text>
                <HStack
                    py={1}
                    borderLeftRadius={'full'}
                    alignSelf={'center'}
                    w={'85%'}
                    bg={'#52C03A2B'}>
                    <Input
                        px={6}
                        borderWidth={0}
                        bg={'#52C03A20'}
                        _focus={{ bg: '#52C03A2B' }}
                        color={'#fff'}
                        fontSize={'md'}
                        InputRightElement={
                            <TouchableOpacity>

                                <SvgXml xml={copy} height={20} width={20} style={{ right: '100%' }} />
                            </TouchableOpacity>
                        }
                        rounded={'full'}
                        w={'75%'}
                    />
                    <Box w={'25%'}>
                        <HStack space={2} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontWeight={'bold'}>
                                100
                            </Text>
                            <SvgXml height={40} width={40} xml={logo} />
                        </HStack>
                    </Box>
                </HStack>
                <Box justifyContent={'space-between'} height={heightPercentageToDP(80)}>
                    <Box mt={'15%'}>
                        <Text color={'#fff'} fontSize={'lg'} alignSelf={'center'}>
                            YOU WON
                        </Text>
                        <HStack mb={1} space={1} justifyContent={'center'} alignItems={'center'}>
                            <SvgXml height={50} width={50} xml={logo} />
                            <Heading fontSize={'3xl'} color={'#fff'} >
                                100 TOKENS
                            </Heading>
                        </HStack>
                        <Text
                            fontWeight={'bold'}
                            alignSelf={'center'}
                            fontSize={'lg'}
                            mb={1}
                            color={'#fff'}>
                            CONGRATULATIONS!
                        </Text>
                        <Text
                            color={'#fff'}
                            fontSize={'lg'}
                            textAlign={'center'}
                            alignSelf={'center'}
                            w={'75%'}>
                            {`You are now part of the Sportain Community`.toUpperCase()}
                        </Text>
                    </Box>

                    <Box bottom={6}>
                        <Text
                            px={3}
                            mb={1}
                            color={'#fff'}
                            fontWeight={'bold'}
                            fontSize={'sm'}>
                            MORE TO COME SOON...
                        </Text>
                        <ScrollView
                            horizontal
                            alignSelf="center"
                            showsHorizontalScrollIndicator={false}>
                            <HStack alignSelf="center">
                                <Box
                                    h={heightPercentageToDP(20)}
                                    w={heightPercentageToDP(20)}
                                    alignItems="center"
                                    justifyContent="center">
                                    <Image
                                        source={carousel}
                                        alt={'txt'}
                                        resizeMode="contain"
                                        maxHeight={heightPercentageToDP(19)}
                                        maxWidth={heightPercentageToDP(19)}
                                    />
                                </Box>
                                <Box
                                    h={heightPercentageToDP(20)}
                                    w={heightPercentageToDP(20)}
                                    alignItems="center"
                                    justifyContent="center">
                                    <Image
                                        source={carousel}
                                        alt={'txt'}
                                        resizeMode="contain"
                                        maxHeight={heightPercentageToDP(19)}
                                        maxWidth={heightPercentageToDP(19)}
                                    />
                                </Box>
                                <Box
                                    h={heightPercentageToDP(20)}
                                    w={heightPercentageToDP(20)}
                                    alignItems="center"
                                    justifyContent="center">
                                    <Image
                                        source={carousel}
                                        alt={'txt'}
                                        resizeMode="contain"
                                        maxHeight={heightPercentageToDP(19)}
                                        maxWidth={heightPercentageToDP(19)}
                                    />
                                </Box>
                            </HStack>
                        </ScrollView>
                    </Box>
                    <Button
                        onPress={() => props.navigation.navigate('WelcomeScreen')}
                        p={4}
                        _pressed={{ bg: '#50B05F95' }}
                        bottom={'20%'}
                        // mb={'15%'}
                        bg={'#50B05F'}
                        alignSelf={'center'}
                        w={'85%'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <HStack space={3} justifyContent={'center'} alignItems={'center'}>
                            <Text fontWeight={'bold'} color={'#000'} fontSize={'md'}>
                                SPORTAIN EXPERIANCE
                            </Text>
                        </HStack>
                    </Button>
                </Box>
            </ImageBackground>
        </Box>
    );
};
