import {
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Box, Button, Heading, HStack, Text, VStack } from 'native-base';
import { welcomeScreenbg } from '../assets/images';
import { SvgXml } from 'react-native-svg';
import { arrow, cricketball, football, tennis } from '../assets/Svgs/SvgGroup';
import { metropolis, metropolisBold } from '../assets/fonts';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const WelcomeScreen = (props: any) => {
    const [selectedSport, setSelectedSport] = useState('');
    console.log('hello tests')
    const renderSportItem = (sport: any, icon: any, label: any) => {
        const isSelected = selectedSport === sport;
        return (
            <TouchableOpacity onPress={() => setSelectedSport(sport)}>
                <VStack justifyContent="center" alignItems="center">
                    <SvgXml xml={icon} />
                    <Text
                        mt={1}
                        color={'#fff'}
                        fontStyle={isSelected ? 'italic' : 'normal'}
                        fontFamily={isSelected ? metropolisBold : metropolis}
                        fontSize={isSelected ? 'md' : 'sm'}
                        fontWeight={isSelected ? 'bold' : 'normal'}>
                        {label}
                    </Text>
                </VStack>
            </TouchableOpacity>
        );
    };
    return (
        <ImageBackground source={welcomeScreenbg} style={{ flex: 1, zIndex: 10 }}>
            {/* <ImageBackground source={playerScreenbg} style={{ height: 650, width: 650, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', zIndex: 12 }}> */}
            <Box flex={1} safeAreaTop>
                <Box justifyContent={'space-between'}>
                    <Heading
                        mt={3}
                        mb={2}
                        alignSelf={'center'}
                        alignItems={'center'}
                        color={'#fff'}
                        fontFamily={metropolisBold}
                        fontSize={'4xl'}>
                        SPORTAIN
                    </Heading>
                    <Text
                        alignSelf={'center'}
                        alignItems={'center'}
                        color={'#fff'}
                        fontFamily={metropolis}
                        fontSize={'2xl'}>
                        PICK YOUR PASSION
                    </Text>
                    <Heading
                        alignSelf={'center'}
                        alignItems={'center'}
                        fontFamily={metropolisBold}
                        color={'#fff'}
                        fontSize={'3xl'}>
                        LIVE THE ACTION!
                    </Heading>
                </Box>
            </Box>


            <Box
                bottom={'8%'}

                height={heightPercentageToDP(15)}
                justifyContent={'center'}
                alignItems={'center'}>
                <HStack space={10} alignSelf="center">
                    {renderSportItem('football', football, 'FOOTBALL')}
                    {renderSportItem('cricket', cricketball, 'CRICKET')}
                    {renderSportItem('tennis', tennis, 'TENNIS')}
                </HStack>
            </Box>

            <Button
                onPress={() => props.navigation.navigate('GetStarted')}
                p={4}
                bottom={'10%'}
                // mb={'20%'}
                _pressed={{ bg: '#50B05F95' }}
                bg={'#50B05F'}
                alignSelf={'center'}
                w={'75%'}
                justifyContent={'center'}
                alignItems={'center'}>
                <HStack space={3} justifyContent={'center'} alignItems={'center'}>
                    <Text color={'#000'} fontFamily={metropolis} fontSize={'md'}>
                        GET STARTED!
                    </Text>
                    <SvgXml xml={arrow} />
                </HStack>
            </Button>


            {/* </ImageBackground> */}
        </ImageBackground>
    );
};
