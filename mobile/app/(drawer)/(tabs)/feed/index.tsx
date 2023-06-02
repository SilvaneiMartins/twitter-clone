import {
    View,
    FlatList,
    Pressable,
    StyleSheet,
} from 'react-native';
import { Link } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

import tweets from '../../../../service/tweets';
import { Tweet } from '../../../../components/Tweet';

export default function TabOneScreen() {
    return (
        <View style={styles.page}>
            <FlatList
                data={tweets}
                renderItem={({ item }) => <Tweet tweet={item}  />}
                showsVerticalScrollIndicator={false}
            />

            <Link href={'/new-tweet'} asChild>
                <Pressable style={styles.floatingButton}>
                    <Entypo
                        name="plus"
                        size={30}
                        color="white"
                    />
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    floatingButton: {
        width: 50,
        right: 15,
        bottom: 15,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: '#1C9BF0',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
