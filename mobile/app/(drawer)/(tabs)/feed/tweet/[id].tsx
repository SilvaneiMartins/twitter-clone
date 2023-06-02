import React from 'react';
import { Text } from 'react-native';
import { useSearchParams } from 'expo-router';

import { Tweet } from '../../../../../components/Tweet';
import tweets from '../../../../../service/tweets';

export default function TweetScreen() {
    const { id } = useSearchParams();

    const tweet = tweets.find((tweet) => tweet.id === id);

    if (!tweet) {
        return (
            <Text>O Tweet com {id} não existe</Text>
        )
    }

    return (
        <Tweet tweet={tweet} />
    )
}
