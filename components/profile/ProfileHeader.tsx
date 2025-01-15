import { View, StyleSheet, Image, Text } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Chip from "../Chip";

interface ProfileHeaderProps {
    username: string;
    role: string;
    location?: string;
    seniority?: string;
    image?: string;
    availability?: string;
}

export default function ProfileHeader({ username, role, location, seniority }: ProfileHeaderProps) {
  return (
    <View style={styles.profileHeaderContainer}>
        <Image
            source={require('@/assets/images/evs-logo-background.png')}
            style={styles.backgroundImage}
            resizeMode="contain"
        />
        <Chip 
            style={{ position: 'absolute', top: 16, right: 16 }}
            label="Available" 
            color="rgb(11, 102, 37)" 
        />
        <View style={{ alignItems: 'flex-start' }}>
            <View style={styles.avatar}>
                <MaterialIcons name="person" size={80} color="white" />
            </View>
            {/* Nombre del usuario */}
            <View>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.role}>{role}</Text>
            </View>
            <View style={{ marginTop: 8 }}>
                <Text>{location}</Text>
                <Text>{seniority} in Evalueserve</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    profileHeaderContainer: {
        alignItems: 'baseline',
        padding: 16,
        backgroundColor: 'rgb(239, 232, 241)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    backgroundImage: {
        position: 'absolute',
        bottom: 10, 
        right: 10, 
        width: 50, 
        height: 50, 
        opacity: 0.3
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
    username: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'rgb(87, 54, 97)',
    },
    role: {
        fontSize: 20,
    },
});