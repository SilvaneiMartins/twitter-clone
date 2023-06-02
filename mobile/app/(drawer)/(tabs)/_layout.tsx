import { Link, Tabs, useNavigation } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Image, Pressable, useColorScheme } from 'react-native';

import Colors from '../../../constants/Colors';

type RootStackParamList = {
    AvatarHeader: undefined;
};

export const unstable_settings = {
    initialRouteName: 'two',
};

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function AvatarHeader() {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.openDrawer()}>
            <Image
                source={{ uri: 'https://github.com/silvaneimartins.png' }}
                style={{ width: 30, aspectRatio: 1, borderRadius: 40, marginLeft: 15 }}
            />
        </Pressable>
    );
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            }}>
            <Tabs.Screen
                name="feed"
                options={{
                    title: 'Feed',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="code" color={color} />
                    ),
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                    headerLeft: () => (
                        <AvatarHeader />
                    ),
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: 'Tela Dois',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="code" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
