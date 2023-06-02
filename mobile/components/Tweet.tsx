import React from 'react';
import { Link } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import { ITweetType } from '../interface';
import { IconButton } from './IconButton';

type ITweetProps = {
    tweet: ITweetType;
};

export const Tweet = ({ tweet }: ITweetProps) => {
    return (
        <Link
            asChild
            href={{ pathname: `/feed/tweet/${tweet.id}`, params: { tweet } }}
        >
            <Pressable
                style={styles.container}
            >
                <Image
                    style={styles.userAvatar}
                    source={{ uri: tweet.user.image }}
                />

                <View style={styles.mainContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.textName}>{tweet.user.name}</Text>
                        <Text style={styles.textUserName}>{tweet.user.username}･3h</Text>
                        <Entypo
                            name="dots-three-horizontal"
                            size={16}
                            color="gray"
                            style={{ marginLeft: 'auto' }}
                        />
                    </View>

                    <Text style={styles.textContent}>{tweet.content}</Text>

                    {tweet.image && (
                        <Image
                            style={styles.image}
                            source={{ uri: tweet.image }}
                        />
                    )}

                    <View style={styles.footer}>
                        <IconButton
                            iconName='comment'
                            size={22}
                            color='gray'
                            text={tweet.numberOfComments}
                        />
                        <IconButton
                            iconName='retweet'
                            size={22}
                            color='gray'
                            text={tweet.numberOfRetweets}
                        />
                        <IconButton
                            iconName='heart'
                            size={22}
                            color='gray'
                            text={`${tweet.numberOfLikes}M`}
                        />
                        <IconButton
                            iconName='chart'
                            size={22}
                            color='gray'
                            text={tweet.impressions || 0}
                        />
                        <IconButton
                            iconName='share-apple'
                            size={22}
                            color='gray'
                        />
                    </View>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    mainContainer: {
        flex: 1,
        marginLeft: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    textName: {
        fontSize: 15,
        fontWeight: '800',
    },
    textUserName: {
        color: 'gray',
        marginLeft: 5,
    },
    textContent: {
        fontSize: 16,
        marginTop: 5,
        lineHeight: 20,
        marginRight: 10,
        textAlign: 'justify',
    },
    image: {
        width: '100%',
        borderRadius: 10,
        marginVertical: 10,
        aspectRatio: 16 / 9,
    },
    footer: {
        marginVertical: 5,
        flexDirection: 'row',
        marginHorizontal: 2,
        justifyContent: 'space-between',
    },
});
