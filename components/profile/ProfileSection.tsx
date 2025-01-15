import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface ProfileSectionProps {
    title: string;
    data?: any;
    style?: any;
}


export default function ProfileSection({title, style}: ProfileSectionProps){
    return(
        <View style={{...styles.summaryContainer, ...style}}>
            <Text style={{fontSize:18, fontWeight: 500}}> {title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    summaryContainer: {
        backgroundColor: 'white',
        padding: 16
    },
})