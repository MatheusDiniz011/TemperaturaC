import { Pressable } from "react-native"

export default function Press({style, children, onPress}) {
    
    return <Pressable onPress={onPress} style={style}>{children}</Pressable>

}