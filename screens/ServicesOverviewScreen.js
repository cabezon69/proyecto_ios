import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect } from 'react'
import { SERVICES, CATEGORIES } from "../data/dummy_data";
import ServiceItem from "../components/ServiceItem";

function ServicesOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId

    const displayedServices = SERVICES.filter((serviceItem) => {
        return serviceItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    function renderServiceItem(itemData) {
        return (
            <ServiceItem
                id={itemData.item.id}
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                duration={itemData.item.duration}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedServices}
                keyExtractor={(item) => item.id}
                renderItem={renderServiceItem}
            />
        </View>
    )
}

export default ServicesOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})