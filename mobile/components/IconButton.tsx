import React, { ComponentProps } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type IIconButtonProps = {
    iconName?: ComponentProps<typeof EvilIcons>['name'];
    size?: number;
    color?: string;
    text?: string | number;
};

export const IconButton = (props: IIconButtonProps) => {
    return (
        <Pressable >
            <View style={styles.iconFooterContainer}>
                <EvilIcons
                    name={props.iconName}
                    size={props.size}
                    color={props.color}
                    style={{ marginBottom: 3 }}
                />
                <Text style={styles.textFooter}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    footer: {
        marginVertical: 3,
        flexDirection: 'row',
        marginHorizontal: 2,
        justifyContent: 'space-between',
    },
    iconFooterContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 3,
    },
    textFooter: {
        fontSize: 15,
        marginLeft: 2,
        color: 'gray',
    },
});
