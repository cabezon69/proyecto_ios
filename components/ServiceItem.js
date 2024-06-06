import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native"
import { useNavigation } from '@react-navigation/native'
import ServiceDetails from "./ServiceDetails"

function ServiceItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation()

    function selectServiceHandler() {
        navigation.navigate('ServiceDetail', { serviceId: id })
    }

    return (
        <View style={styles.serviceItem}>
            <Pressable
                androidRipple={{ color: '#ccc' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectServiceHandler}
            >
                <View>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <ServiceDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    )
}

export default ServiceItem

const styles = StyleSheet.create({
    serviceItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})