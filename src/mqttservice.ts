import {Client,Message} from "paho-mqtt"

const clientID = "mqtt123"
const client = new Client("b5619a98.ala.asia-southeast1.emqxsl.com",8084,clientID)

const connect = ()=> {
    client.connect({
        onSuccess: onSucces,
        onFailure :onFailure,
        useSSL: true,
        userName:'thanhtai',
        password:'thanhtai'
    })
}
function onSucces() {
    if(client.isConnected()) {
        return;
    }
    console.log("Succes!")
    client.subscribe("test")
}
function onFailure() {
    console.log("on Failure!")
}
const sendMessage = (topic:string,message:string) => {
    const payload = new Message(message)
    payload.destinationName = topic
    client.send(payload)
}
export {connect,sendMessage}