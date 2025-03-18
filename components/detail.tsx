import {View, Text, Button} from "react-native"


const Details = (props:any)=>
{
    const {navigation} = props;
    return(
    <View>
        <Button title = 'About' onPress={() => navigation.navigate("About")}></Button>
    </View>
    )
}
export default Details;