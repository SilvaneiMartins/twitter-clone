import {
    View,
    Text,
    Image,
    Platform,
    StatusBar,
    Pressable,
    TextInput,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';

const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image: 'https://github.com/silvaneimartins.png',

}

export default function NewEweet() {
    const router = useRouter();
    const [text, setText] = useState<string>('' as string);

    const onTweetPress = () => {
        console.warn(`Posting the tweet: ${text}`);
        setText('');
        router.back();
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white',
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
            }}
        >
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Link href={'../'} asChild>
                        <Pressable>
                            <Text style={{ fontSize: 18 }}>Cancelar</Text>
                        </Pressable>
                    </Link>

                    <Pressable onPress={onTweetPress} style={styles.buttonTweet}>
                        <Text style={styles.textButtonTweet}>Postar</Text>
                    </Pressable>
                </View>

                <View style={styles.inputContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: user.image }}
                    />
                    <TextInput
                        multiline
                        value={text}
                        numberOfLines={5}
                        style={styles.input}
                        onChangeText={setText}
                        placeholder='O que está acontecendo?'
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    buttonContainer: {
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonTweet: {
        borderRadius: 30,
        paddingHorizontal: 25,
        backgroundColor: '#1C9BF0',
        padding: Platform.OS === 'ios' ? 12 : 8,
    },
    textButtonTweet: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        marginBottom: 5,
        textAlignVertical: 'top',
    },
    image: {
        width: 50,
        aspectRatio: 1,
        marginRight: 10,
        borderRadius: 50,
    }
});
