import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Divider from '../components/Divider';

const UserProfile = () => {
    const insets = useSafeAreaInsets();
    
    return (
        <View style={{ flex: 1, paddingTop: insets.top, marginLeft: 10, marginRight: 10, gap: 10 }}>
            <StatusBar backgroundColor="transparent" translucent />

            {/* Contenedor del perfil */}
            <View style={styles.profileContainer}>
                <Image
                    source={require('@/assets/images/evs-logo-background.png')}
                    style={styles.backgroundImage}
                    resizeMode="contain"
                />
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={styles.avatar}>
                        <MaterialIcons name="person" size={80} color="white" />
                    </View>
                    {/* Nombre del usuario */}
                    <View>
                        <Text style={styles.username}>Ricardo Nain</Text>
                        <Text style={styles.role}>Lead Engineer (CHI-18923)</Text>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text>Viña del Mar, Valparaiso - Chile</Text>
                        <Text>3 years and 7 months in Evalueserve</Text>
                    </View>
                </View>
            </View>

            {/* Informacion */}
            <View style={{...styles.summaryContainer, gap: 5}}>
                <View>
                    <Text style={{fontSize:18, fontWeight: 500}}>Summary</Text>
                </View>
                <Divider />
                <View>
                    <Text style={{fontSize:18, fontWeight: 500}}>Skills and Tools</Text>
                </View>
            </View>
            <View style={styles.summaryContainer}>
                <Text style={{fontSize:18, fontWeight: 500}}>Languages</Text>
            </View>
            <View style={styles.summaryContainer}>
                <Text style={{fontSize:18, fontWeight: 500}}>Experience</Text>
            </View>
            <View style={styles.summaryContainer}>
                <Text style={{fontSize:18, fontWeight: 500}}>Education</Text>
            </View>
            <View style={styles.summaryContainer}>
                <Text style={{fontSize:18, fontWeight: 500}}>Courses and Certifications</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundContainer: {
        height: 200,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    profileContainer: {
        alignItems: 'baseline',
        padding: 16,
        backgroundColor: 'rgb(239, 232, 241)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 3, // Sombra para Android
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    summaryContainer: {
        elevation: 3,
        backgroundColor: 'white',
        padding: 16
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: 8,
        backgroundColor: 'rgb(189, 189, 189)'
    },
    backgroundImage: {
        position: 'absolute',
        bottom: 10, 
        right: 10, 
        width: 50, 
        height: 50, 
        opacity: 0.3
    },
    username: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'rgb(87, 54, 97)',
    },
    role: {
        fontSize: 20,
    },
});

export default UserProfile;
