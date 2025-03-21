import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const DemoScreen = ({navigation}:any) => {
    const menuItems = [
        { id: "1", name: "Nhiệt Độ", icon: "temperature-high" },
        { id: "2", name: "Quạt", icon: "fan" },
        { id: "3", name: "Cửa", icon: "lock" },
        { id: "4", name: "Đèn", icon: "lightbulb" },
        { id: "5", name: "Gara", icon: "car" },
        { id: "6", name: "Cảnh Báo", icon: "exclamation-triangle" },
        {id: "7", name:"Automation",icon:"play-circle"}
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>TRANG CHỦ</Text>
                <Icon name="cog" size={20} color="#000" />
            </View>

            {/* Menu Items */}
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.menuItem}
                    onPress={() => navigation.navigate("Details")}>

                        <Icon name={item.icon} size={20} color="#000" />
                        <Text style={styles.menuText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <Icon name="home" size={24} color="black" />
                <Icon name="comment" size={24} color="black" />
                <Icon name="bell" size={24} color="black" />
                <Icon name="user" size={24} color="black" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ddd",
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        justifyContent:'center',
        height:100,
    },
    menuText: {
        marginLeft: 15,
        fontSize: 16,
    },
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 15,
        backgroundColor: "#eee",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
    },
});

export default DemoScreen;
