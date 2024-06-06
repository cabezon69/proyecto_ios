import { Image, Text, View, StyleSheet, ScrollView } from "react-native"
import { SERVICES } from '../data/dummy_data'
import ServiceDetails from "../components/ServiceDetails"

function ServiceDetailScreen({ route, navigation }) {
    const serviceId = route.params.serviceId
    const selectedService = SERVICES.find((service) => service.id === serviceId)

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedService.imageUrl }} />
            <Text style={styles.title}>{selectedService.title}</Text>
            <ServiceDetails
                duration={selectedService.duration}
                complexity={selectedService.complexity}
                affordability={selectedService.affordability}
            />
            <View>
                <Text style={styles.subtitle}>Componentes</Text>
                {selectedService.components.map(component => <Text style={styles.textContent} key={component}>{component}</Text>)}

            </View>
        </ScrollView>
    )
}

export default ServiceDetailScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    textContent: {
        fontSize: 14,
        margin: 4,
        marginVertical: 3,
        marginHorizontal: 24
    }
})