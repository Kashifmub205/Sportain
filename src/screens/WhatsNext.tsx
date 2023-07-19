import { ImageBackground, Linking, Platform } from 'react-native';
import React, { useState } from 'react';
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
import { coinsvg, backbutton } from '../assets/Svgs/SvgGroup';
import { SvgXml } from 'react-native-svg';
import { metropolis, metropolisBold } from '../assets/fonts';

export const WhatsNext = (props: any) => {
  const [redirectToFeatures, setRedirectToFeatures] = useState(false);
  return (
    // <Box flex={1} bg={'#000'} safeAreaTop>
    <ScrollView flex={1} bg={'#000'} >
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
        source={bg6}
        resizeMode={'contain'}
        style={{ flex: 1, height: heightPercentageToDP(100) }}>
        <Box
          justifyContent={'space-between'}
          // mt={2}
          height={heightPercentageToDP(100)}>
          <Box>
            <Text
              color={'#fff'}
              fontFamily={metropolis}
              textAlign={'center'}
              alignSelf={'center'}
              fontSize={'lg'}>
              THIS IS YOUR {'\n'} CRICKET WORLD
            </Text>
            <Heading
              fontFamily={metropolisBold}
              fontSize={'4xl'}
              alignSelf={'center'}
              color={'#59BB5D'}>
              SHAPE IT
            </Heading>
          </Box>
          <Box mt={'20%'}>
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
              fontFamily={metropolisBold}
              ml={10}
              right={2}
              mt={'15%'}
              mb={4}
              color="#59BB5D"
              textAlign="left"
              lineHeight={40}>
              <Text fontFamily={metropolisBold} style={{ color: 'white' }}>
                OWN
              </Text>{' '}
              {'\n'}
              YOUR {'\n'}COMMUNITY
            </Heading>
            <Box mb={2}>
              <Text
                fontFamily={metropolisBold}
                ml={8}
                color={'#fff'}
                fontWeight={'bold'}
                fontSize={'xl'}>
                {`empower your passion`.toUpperCase()}
              </Text>
              <Text
                ml={8}
                w={'90%'}
                fontFamily={metropolis}
                color={'#fff'}
                fontSize={'lg'}>
                {`"take an active role in your cricket universe through the unique sportain token."`.toUpperCase()}
              </Text>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </ImageBackground>
      <ImageBackground
        source={coinBg}
        resizeMode={'contain'}
        style={{
          flex: 1,
          height: heightPercentageToDP(100),
          marginBottom: '15%',
        }}>
        <Box mt={'16%'}>
          <SvgXml xml={coinsvg} style={{ alignSelf: 'center' }} />
          <Text
            fontFamily={metropolis}
            fontSize={'lg'}
            color={'#fff'}
            mt={1}
            alignSelf={'center'}>
            THE SPORTAIN TOKEN
          </Text>
        </Box>
      </ImageBackground>
      <ImageBackground
        source={cashBg}
        resizeMode={'contain'}
        style={{ flex: 1, height: heightPercentageToDP(100) }}>
        <Box bottom={'10%'}>
          <Text ml={8} color={'#fff'} fontFamily={metropolis} fontSize={'lg'}>
            MANAGE AND MULTIPLY WITH
          </Text>
          <Heading
            fontSize="4xl"
            // right={12}
            ml={10}
            fontFamily={metropolisBold}
            right={2}
            mb={4}
            color="#59BB5D"
            textAlign="left"
            lineHeight={40}>
            <Text style={{ color: 'white' }}>WELTHEE</Text> {'\n'}
            WALLET APP
          </Heading>
          <Text
            ml={8}
            maxWidth={'80%'}
            mt={1}
            fontFamily={metropolis}
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
        style={{ flex: 1, height: heightPercentageToDP(100) }}>
        <Box bottom={'6%'}>
          <Heading
            ml={8}
            fontFamily={metropolisBold}
            fontSize="4xl"
            w="100%"
            color="#59BB5D">
            REDEEM{'\n'}
            <Text style={{ color: 'white' }}>100 SPORTAIN'S {'\n'}</Text>
            TOKENS {'\n'}
          </Heading>
          <Box bottom={4}>
            <Text
              ml={8}
              w={'70%'}
              fontFamily={metropolisBold}
              color={'#fff'}
              fontWeight={'bold'}
              fontSize={'xl'}>
              {`Use “Sportain100” code available for 24 Hours`.toUpperCase()}
            </Text>
            <Text
              ml={8}
              fontFamily={metropolis}
              mt={2}
              w={'70%'}
              color={'#fff'}
              fontSize={'lg'}>
              {`Claim your first sportain tokens from Welthee app!`.toUpperCase()}
            </Text>
          </Box>
        </Box>
      </ImageBackground>
      <Button
        onPress={() => {

          const storeUrl =
            Platform.OS === 'ios'
              ? 'https://apps.apple.com/en/app/welthee-wallet/id1562108720'
              : 'https://play.google.com/store/apps/details?id=com.welthee.wallet&pli=1';

          Linking.openURL(storeUrl).then(() => {
            return new Promise<void>(resolve => setTimeout(resolve, 500));
          }).then(() => {
            props.navigation.navigate('Features');
          }).catch(error => {

            console.log('Error:', error);
          });
        }}
        p={4}
        _pressed={{ bg: '#50B05F95' }}
        bottom={'22%'}
        bg={'#50B05F'}
        alignSelf={'center'}
        w={'85%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <HStack space={3} justifyContent={'center'} alignItems={'center'}>
          <Text fontFamily={metropolis} color={'#000'} fontSize={'md'}>
            DOWNLOAD WELTHEE APP
          </Text>
        </HStack>
      </Button>
      <Text
        color={'#fff'}
        fontFamily={metropolis}
        alignSelf={'center'}
        bottom={'2%'}>
        {`@Sportain 2023`.toUpperCase()}
      </Text>
    </ScrollView>
    // </Box>
  );
};
