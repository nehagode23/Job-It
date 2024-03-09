import { useState } from 'react';
import {Text,View,ScrollView,SafeAreaView} from 'react-native';
import {Stack, useRouter} from 'expo-router';

import {COLORS, images, icons, SIZES} from '../constants';
import {Nearbyjobs, Popoularjobs,ScreenHeaderBtn, Welcome } from '../components';

const Home=()=>{

    const router=useRouter();

    return(
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
        options={{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft:()=>(
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
            ),
            headerRight:()=>(
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="100%"/>
            ),
        }}
        />
    </SafeAreaView>
    )
}

export default Home;