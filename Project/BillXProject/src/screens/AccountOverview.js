import React from 'react';
import { View, Text ,SafeAreaView } from 'react-native';
import {Button} from 'react-native-elements';

export default function Account({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, marginBottom: 20 }}>Home Screen</Text>
                <View style={{ paddingTop: 20 }}>
                    
                    <Button
                        title="Home"
                        onPress={() => navigation.navigate('Home')}
                        buttonStyle={{ backgroundColor: 'blue', marginTop: 10 }}
                    />
                    
                </View>
            </View>
        </SafeAreaView>
    );
}