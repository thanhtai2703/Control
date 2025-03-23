import { View, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import { connect, sendMessage } from "../src/mqttservice";
import {Client} from "paho-mqtt";

const AboutScreen = () => {
    useEffect(() => {
        connect();
    }, []);

    const [message, setMessage] = useState<string>('{ "command": "ON" }');
    const [topic, setTopic] = useState<string>("emqx/esp32");

    const handleSend = () => {
        sendMessage(topic, message);
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>A LO</Text>
            <Button title={"MQTT"} onPress={handleSend} />
            <Text>This is AboutScreen</Text>
        </View>
    );
};

export default AboutScreen;
