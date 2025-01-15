import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Divider from '@/components/Divider';
import ProfileSection from '@/components/profile/ProfileSection';
import ProfileHeader from '@/components/profile/ProfileHeader';

const UserProfile = () => {
    const insets = useSafeAreaInsets();
    
    return (
        <View style={{...styles.profileContainer, paddingTop: insets.top}}>
            <StatusBar backgroundColor="transparent" translucent />

            {/* Contenedor del perfil */}
            <ProfileHeader 
                username='Ricardo Nain'
                role='Lead Engineer (CHI-18923)'
                location='Viña del Mar, Valparaiso - Chile'
                seniority='3 years and 7 months'
            />

            {/* Informacion */}
            <View style={{...styles.summaryContainer}}>
                <ProfileSection title="Summary" />
                <View style={{paddingLeft: 5, paddingRight: 5}}>
                    <Divider  />
                </View>
                <ProfileSection title="Skills and Tools" />
            </View>
            <ProfileSection title="Languages" />
            <ProfileSection title="Experience" />
            <ProfileSection title="Education" />
            <ProfileSection title="Courses and Certifications" />
        </View>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1, 
        marginLeft: 10, 
        marginRight: 10, 
        gap: 10
    },
    summaryContainer: {
        backgroundColor: 'white',
        gap: 5,
    }
});

export default UserProfile;
