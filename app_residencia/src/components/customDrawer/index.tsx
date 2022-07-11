import React from "react";
import { View, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";
import { useTheme, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const DrawerContent = (props: any) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#FCF9F9' }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem style={styles.box}
                            icon={() => (
                                <Icon
                                    name="home"
                                    color={'white'}
                                    size={26}
                                />
                            )}
                            label="Home"
                            labelStyle={{ color: '#ffffff' }}
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem style={styles.box}
                            icon={() => (
                                <Icon
                                    name="heart" type='ant-design'
                                    color={'white'}
                                    size={22}
                                />
                            )}
                            label="Favoritos"
                            labelStyle={{ color: '#ffffff' }}
                            onPress={() => { props.navigation.navigate('Favorites') }}
                        />
                        <DrawerItem style={styles.box}
                            icon={() => (
                                <Icon
                                    name="shopping-cart"
                                    color={'white'}
                                    size={24}
                                />
                            )}
                            label="Carrinho"
                            labelStyle={{ color: '#ffffff' }}
                            onPress={() => { props.navigation.navigate('Cart') }}
                        />
                        <DrawerItem style={styles.box}
                            icon={() => (
                                <Icon
                                    name='user-alt' type='font-awesome-5'
                                    color={'white'}
                                    size={19}
                                />
                            )}
                            label='Perfil'
                            labelStyle={{ color: '#ffffff' }}
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sair"
                    onPress={() => { props.navigation.navigate('Login')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor: '#FCF9F9',
    },
    box: {
        backgroundColor: '#562637',
        marginBottom: 13,
    },

    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default DrawerContent;