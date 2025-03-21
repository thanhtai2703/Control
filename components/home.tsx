import {View,Text, Button, Alert,StyleSheet} from "react-native"

    const HomeScreen = (props:any)=>
{
    const {navigation} = props;
    return(
    <View style={styles.title}>
        <Button title="Details" onPress={()=>navigation.navigate("Details")}/>
    </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'space-around',
        flex:1
    },
});
export default HomeScreen;
