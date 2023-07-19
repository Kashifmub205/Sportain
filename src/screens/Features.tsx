import { ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import {
    Box,
    Heading,
    HStack,
    Input,
    Text,
    Image,
    Button,
    Toast,
} from 'native-base';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { carousel, colors } from '../assets/images';
import { SvgXml } from 'react-native-svg';
import { copy, logo, muchmore } from '../assets/Svgs/SvgGroup';

import { metropolis, metropolisBold } from '../assets/fonts';
import Clipboard from '@react-native-community/clipboard';
export const Features = (props: any) => {
    const [code, setcode] = useState('');

    const handleCopyText = () => {
        if (code) {
            Clipboard.setString(code);
            const success = Clipboard.hasString();
            if (success) {
                console.log('Text copied to clipboard!');
                Toast.show({
                    description: 'Text copied to clipboard!',
                });
            } else {
                console.log('Failed to copy text to clipboard!');
            }
        }
    };

    const tempArray = [
        {
            image: carousel,
            text: 'MARKET PLACE',
        },
        {
            image: carousel,
            text: 'MEET YOUR STARS',
        },
        {
            image: carousel,
            text: 'TALENT HUNT',
        },
        {
            svg: true,
            text: 'MUCH MORE...',
        },
    ];
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
                        <Text fontFamily={metropolis} left={2} mb={2} color={'#FFFFFF99'}>
                            WALLET ADDRESS
                        </Text>
                        <HStack
                            borderLeftRadius={'full'}
                            bg={'#52C03A2B'}
                            w={'85%'}
                            alignItems={'center'}>
                            <Input
                                p={1.5}
                                value={code}
                                editable={false}
                                fontFamily={metropolisBold}
                                onChangeText={text => setcode(text)}
                                pl={4}
                                _focus={{ bg: '#52C03A2B', borderColor: '#52C03A50' }}
                                rounded={'full'}
                                color={'#fff'}
                                borderWidth={0}
                                w={'75%'}
                                InputRightElement={
                                    <TouchableOpacity
                                        onPress={handleCopyText}
                                        style={{ right: '100%' }}>
                                        <SvgXml xml={copy} />
                                    </TouchableOpacity>
                                }
                                bg={'#52C03A50'}
                            />
                            <Box right={1} w={'25%'} borderRightRadius={'full'}>
                                <HStack
                                    space={2}
                                    justifyContent={'center'}
                                    alignItems={'center'}>
                                    <Text fontWeight={'bold'} color={'#fff'}>
                                        100
                                    </Text>
                                    <SvgXml xml={logo} height={30} width={30} />
                                </HStack>
                            </Box>
                        </HStack>
                    </Box>
                    <Box>
                        <Text
                            fontSize={'lg'}
                            fontFamily={metropolis}
                            alignSelf={'center'}
                            color={'#fff'}>
                            YOU WON
                        </Text>
                        <HStack
                            space={1}
                            justifyContent={'center'}
                            alignItems={'center'}
                            mb={6}>
                            <SvgXml xml={logo} height={40} width={40} style={{ bottom: 2 }} />
                            <Heading
                                fontFamily={metropolisBold}
                                fontSize={'3xl'}
                                color={'#fff'}>
                                100 TOKENS
                            </Heading>
                        </HStack>
                        <Text
                            mb={1}
                            alignSelf={'center'}
                            fontSize={'lg'}
                            color={'#fff'}
                            fontFamily={metropolisBold}
                            fontWeight={'bold'}>
                            CONGRATULATIONS
                        </Text>
                        <Text
                            color={'#fff'}
                            lineHeight={20}
                            fontSize={'lg'}
                            fontFamily={metropolis}
                            alignSelf={'center'}
                            w={'60%'}
                            textAlign={'center'}>
                            {`You are now part of the Sportain Community`.toUpperCase()}
                        </Text>
                    </Box>
                    <Box top={'5%'}>
                        <Text
                            mb={1}
                            fontWeight={'bold'}
                            alignSelf={'flex-start'}
                            px={4}
                            fontFamily={metropolisBold}
                            // top={'25%'}
                            color={'#fff'}>
                            MORE TO COME SOON ...
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
                        <FlatList
                            horizontal
                            data={tempArray}
                            keyExtractor={(item: any, index: any) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 4 }}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Box>
                                        {item.svg ? (
                                            <Box position="relative">
                                                <SvgXml
                                                    height={heightPercentageToDP(20)}
                                                    width={heightPercentageToDP(20)}
                                                    // style={{ top: 10 }}
                                                    xml={muchmore}
                                                />
                                                <Box
                                                    position="absolute"
                                                    zIndex={10}
                                                    bottom={0}
                                                    width="100%">
                                                    <Heading
                                                        width="100%"
                                                        alignSelf="center"
                                                        textAlign="center"
                                                        fontFamily={metropolisBold}
                                                        fontSize="md"
                                                        bottom={4}
                                                        color="#fff">
                                                        {item.text}
                                                    </Heading>
                                                </Box>
                                            </Box>
                                        ) : (
                                            <Box position="relative">
                                                <Image
                                                    alt="txt"
                                                    top={0}
                                                    p={4}
                                                    source={item.image}
                                                    resizeMode="contain"
                                                    height={heightPercentageToDP(18)}
                                                    width={heightPercentageToDP(18)}
                                                />
                                                <Box
                                                    position="absolute"
                                                    zIndex={10}
                                                    bottom={0}
                                                    width="100%">
                                                    <Heading
                                                        width="100%"
                                                        alignSelf="center"
                                                        textAlign="center"
                                                        fontWeight="bold"
                                                        fontFamily={metropolisBold}
                                                        fontSize="md"
                                                        px={2}
                                                        bottom={2}
                                                        color="#fff">
                                                        {item.text}
                                                    </Heading>
                                                </Box>
                                            </Box>
                                        )}
                                    </Box>

                                    {/* </Box> */}
                                </TouchableOpacity>
                            )}
                        />
                    </Box>
                    <Button
                        onPress={() => props.navigation.navigate('GetStarted')}
                        p={4}
                        mb={'5%'}
                        _pressed={{ bg: '#50B05F95' }}
                        bg={'#50B05F'}
                        alignSelf={'center'}
                        w={'75%'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <Text fontFamily={metropolis} color={'#000'} fontSize={'md'}>
                            SPORTAIN EXPERIANCE
                        </Text>
                    </Button>
                </Box>
            </ImageBackground>
        </Box>
    );
};
