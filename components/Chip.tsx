import { View, Text, StyleSheet } from "react-native";

interface ChipProps {
    label: string;
    color: string;
    style?: any;
}

export default function Chip({ label, color, style }: ChipProps) {

    return (
        <View style={{ ...style, ...styles.chip, backgroundColor: color}}>
            <Text style={styles.label}>{label.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    chip:{
        padding: 5,
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    label: {
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10
    }
});