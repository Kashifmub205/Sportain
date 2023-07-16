import {
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import {
    Box,
    Heading,
    Text,
    Button,
    HStack,
    Image,
    ScrollView,
} from 'native-base';
import { bg6, cashBg, coinBg, cricket, phone } from '../assets/images';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { coinsvg, cricket2, backbutton } from '../assets/Svgs/SvgGroup';
import { SvgXml } from 'react-native-svg';

export const WhatsNext = (props: any) => {
    return (
        <Box flex={1} bg={'#000'} safeAreaTop>
            <Button
                bg={'transparent'}
                w={'10%'}
                _pressed={{ bg: 'rgba(255,255,255,0.1)s' }}
                onPress={() => props.navigation.goBack()}
                top={4}
                mb={4}
                left={'3%'}>
                <SvgXml xml={backbutton} />
            </Button>
            <ScrollView flex={1}>
                <ImageBackground
                    source={bg6}
                    resizeMode={'contain'}
                    style={{ flex: 1, height: heightPercentageToDP(100) }}>
                    <Box
                        justifyContent={'space-between'}
                        // mt={2}
                        height={heightPercentageToDP(80)}>
                        <Box>
                            <Text
                                color={'#fff'}
                                textAlign={'center'}
                                alignSelf={'center'}
                                fontSize={'lg'}>
                                THIS IS YOUR {'\n'} CRICKET WORLD
                            </Text>
                            <Heading fontSize={'4xl'} alignSelf={'center'} color={'#59BB5D'}>
                                SHAPE IT
                            </Heading>
                        </Box>
                        <Box mt={'35%'}>
                            <Image
                                top={45}
                                source={cricket}
                                height={20}
                                alt={'txt'}
                                left={'25%'}
                                width={20}
                            />
                            <Heading
                                fontSize="4xl"
                                // right={12}
                                px={10}
                                right={2}
                                mt={'15%'}
                                mb={4}
                                color="#59BB5D"
                                textAlign="left"
                                lineHeight={40}>
                                <Text style={{ color: 'white' }}>OWN</Text> {'\n'}
                                YOUR {'\n'}COMMUNITY
                            </Heading>
                            <Box mb={2}>
                                <Text px={8} color={'#fff'} fontWeight={'bold'} fontSize={'xl'}>
                                    {`empower your passion`.toUpperCase()}
                                </Text>
                                <Text px={8} w={'85%'} color={'#fff'} fontSize={'lg'}>
                                    {`"“take an active role in your cricket universe through the unique sportain token”."`.toUpperCase()}
                                </Text>
                            </Box>
                        </Box>
                        <Box></Box>
                    </Box>
                </ImageBackground>
                <ImageBackground
                    source={coinBg}
                    resizeMode={'contain'}
                    style={{ flex: 1, height: heightPercentageToDP(100), bottom: '5%' }}>
                    <Box mt={'16%'}>
                        <SvgXml xml={coinsvg} style={{ alignSelf: 'center' }} />
                        <Text fontSize={'lg'} color={'#fff'} mt={1} alignSelf={'center'}>
                            THE SPORTAIN TOKEN
                        </Text>
                    </Box>
                </ImageBackground>
                <ImageBackground
                    source={cashBg}
                    resizeMode={'contain'}
                    style={{ flex: 1, height: heightPercentageToDP(100) }}>
                    <Box bottom={'15%'}>
                        <Text px={8} color={'#fff'} fontSize={'lg'}>
                            MANAGE AND MULTIPLY WITH
                        </Text>
                        <Heading
                            fontSize="4xl"
                            // right={12}
                            px={10}
                            right={2}
                            mb={4}
                            color="#59BB5D"
                            textAlign="left"
                            lineHeight={40}>
                            <Text style={{ color: 'white' }}>WELTHEE</Text> {'\n'}
                            WALLET APP
                        </Heading>
                        <Text
                            px={8}
                            w={'95%'}
                            mt={2}
                            lineHeight={20}
                            color={'#fff'}
                            fontSize={'lg'}>
                            {`will be The Official Wallet & partner in launching and promoting your sportain token`.toUpperCase()}
                        </Text>
                    </Box>
                </ImageBackground>
                <ImageBackground
                    source={phone}
                    resizeMode={'contain'}
                    style={{ flex: 1, height: heightPercentageToDP(100), top: '1%' }}>
                    <Box bottom={'14%'}>
                        <Heading px={8} fontSize="4xl" w="100%" color="#59BB5D">
                            REDEEM{'\n'}
                            <Text style={{ color: 'white' }}>100 SPORTAIN'S {'\n'}</Text>
                            TOKENS {'\n'}
                        </Heading>
                        <Box bottom={4}>
                            <Text px={8} color={'#fff'} fontWeight={'bold'} fontSize={'xl'}>
                                {`Use “Sportain100” code available for 24 Hours`.toUpperCase()}
                            </Text>
                            <Text px={8} mt={2} w={'85%'} color={'#fff'} fontSize={'lg'}>
                                {`Claim your first sportain tokens from Welthee app!`.toUpperCase()}
                            </Text>
                        </Box>
                    </Box>
                </ImageBackground>
                <Button
                    onPress={() => props.navigation.navigate('Features')}
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
                        <Text fontWeight={'bold'} color={'#000'} fontSize={'md'}>
                            DOWNLOAD WELTHEE APP
                        </Text>
                    </HStack>
                </Button>
                <Text color={'#fff'} alignSelf={'center'} bottom={'3%'}>
                    {`@Sportain 2023`.toUpperCase()}
                </Text>
            </ScrollView>
        </Box>
    );
};
