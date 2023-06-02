import {
    DrawerItemList,
    createDrawerNavigator,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { withLayoutContext } from 'expo-router';
import { Image, Text, View } from 'react-native';

const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

export const unstable_settings = {
    initialRouteName: '(tabs)',
};
function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <View
                style={{
                    marginVertical: 20,
                    alignItems: 'center',
                }}
            >
                <Image
                    source={{
                        uri: 'https://github.com/silvaneimartins.png',
                    }}
                    style={{
                        width: 100,
                        aspectRatio: 1,
                        borderRadius: 50,
                    }}
                />
                <Text
                    style={{
                        fontSize: 17,
                        marginTop: 10,
                        fontWeight: 'bold',
                    }}
                    numberOfLines={1}
                >
                    Silvanei Martins
                </Text>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
};

export default function DrawerLayout() {
    return (
        <Drawer
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#CCCCCC',
                }
            }}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    title: 'Home',
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="bookmarks"
                options={{
                    title: 'Favoritos',
                }}
            />
            <Drawer.Screen
                name="twitter-blue"
                options={{
                    title: 'Tweet Blue',
                }}
            />
        </Drawer>
    )
};
