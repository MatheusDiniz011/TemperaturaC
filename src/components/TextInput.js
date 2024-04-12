import { TextInput } from "react-native";

export default function TextoInp({titulo, style, value, onChangeText}) {
    return <TextInput keyboardType="numeric" onChangeText={onChangeText} value={value} style={style} placeholder={titulo}/>

}