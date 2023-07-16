import {
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useRef } from 'react';
import {
    Box,
    Heading,
    HStack,
    Input,
    Text,
    Image,
    Button,
    ScrollView,
} from 'native-base';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { bg5, carousel, colors } from '../assets/images';
import { SvgXml } from 'react-native-svg';
import { copy, logo } from '../assets/Svgs/SvgGroup';
import Carousel from 'react-native-snap-carousel';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

export const Features = (props: any) => {



    return (
        <Box flex={1} bg={'#000'} safeAreaTop>
            <ImageBackground
                source={colors}
                resizeMode={'contain'}
                style={{
                    flex: 1,
                    height: heightPercentageToDP(100),
                }}>
                <Box justifyContent={'space-between'} height={heightPercentageToDP(90)}>
                    <Box alignSelf={'center'} safeAreaTop>
                        <Text left={2} mb={2} color={'#FFFFFF99'}>
                            WALLLET ADDRESS
                        </Text>
                        <HStack
                            borderLeftRadius={'full'}
                            bg={'#52C03A2B'}
                            w={'85%'}
                            alignItems={'center'}>
                            <Input
                                p={3}
                                _focus={{ bg: '#52C03A2B', borderColor: '#52C03A50' }}
                                rounded={'full'}
                                color={'#fff'}
                                borderWidth={0}
                                w={'70%'}
                                InputRightElement={
                                    <TouchableOpacity style={{ right: '100%' }}>
                                        <SvgXml xml={copy} />
                                    </TouchableOpacity>
                                }
                                bg={'#52C03A50'}
                            />
                            <Box right={1} w={'30%'}>
                                <HStack
                                    space={3}
                                    justifyContent={'center'}
                                    alignItems={'center'}>
                                    <SvgXml xml={logo} height={30} width={30} />
                                    <Text fontWeight={'bold'} color={'#fff'}>
                                        100
                                    </Text>
                                </HStack>
                            </Box>
                        </HStack>
                    </Box>
                    <Box>
                        <Text fontSize={'lg'} alignSelf={'center'} color={'#fff'}>
                            YOU WON
                        </Text>
                        <HStack justifyContent={'center'} alignItems={'center'} mb={6}>
                            <SvgXml xml={logo} height={40} width={40} />
                            <Heading fontSize={'3xl'} color={'#fff'}>
                                103 TOKENS
                            </Heading>
                        </HStack>
                        <Text
                            mb={1}
                            alignSelf={'center'}
                            fontSize={'lg'}
                            color={'#fff'}
                            fontWeight={'bold'}>
                            CONGRATULATIONS
                        </Text>
                        <Text
                            color={'#fff'}
                            lineHeight={20}
                            fontSize={'lg'}
                            alignSelf={'center'}
                            w={'60%'}
                            textAlign={'center'}>
                            {`You are now part of the Sportain Community`.toUpperCase()}
                        </Text>
                    </Box>
                    <Box top={4}>
                        <Text mb={1} fontWeight={'bold'} alignSelf={'flex-start'} px={4} color={'#fff'}>
                            MORE TO COME SOON
                        </Text>
                        {/* <Box>
                            <Carousel
                                ref={carouselRef}
                                data={images}
                                renderItem={renderItem}
                                sliderWidth={300}
                                itemWidth={200}
                            />
                        </Box> */}

                        <ScrollView
                            horizontal
                            alignSelf="center"
                            showsHorizontalScrollIndicator={false}
                            px={4}>
                            <HStack alignSelf="center">
                                <TouchableOpacity>
                                    <Box
                                        h={heightPercentageToDP(20)}
                                        w={heightPercentageToDP(20)}
                                        alignItems="center"
                                        justifyContent="center">
                                        <Image
                                            alt={'txt'}
                                            source={carousel}
                                            resizeMode="contain"
                                            maxHeight={heightPercentageToDP(19)}
                                            maxWidth={heightPercentageToDP(19)}
                                        />
                                    </Box>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Box
                                        h={heightPercentageToDP(20)}
                                        w={heightPercentageToDP(20)}
                                        alignItems="center"
                                        justifyContent="center">
                                        <Image
                                            alt={'txt'}
                                            source={carousel}
                                            resizeMode="contain"
                                            maxHeight={heightPercentageToDP(19)}
                                            maxWidth={heightPercentageToDP(19)}
                                        />
                                    </Box>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Box
                                        h={heightPercentageToDP(20)}
                                        w={heightPercentageToDP(20)}
                                        alignItems="center"
                                        justifyContent="center">
                                        <Image
                                            alt={'txt'}
                                            source={carousel}
                                            resizeMode="contain"
                                            maxHeight={heightPercentageToDP(19)}
                                            maxWidth={heightPercentageToDP(19)}
                                        />
                                    </Box>
                                </TouchableOpacity>
                            </HStack>
                        </ScrollView>
                    </Box>
                    <Button
                        onPress={() => props.navigation.navigate('GetStarted')}
                        p={4}
                        mb={'10%'}
                        _pressed={{ bg: '#50B05F95' }}
                        bg={'#50B05F'}
                        alignSelf={'center'}
                        w={'75%'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <Text fontWeight={'bold'} color={'#000'} fontSize={'md'}>
                            SPORTAIN EXPERIANCE
                        </Text>
                    </Button>
                </Box>
            </ImageBackground>
        </Box>
    );
};
