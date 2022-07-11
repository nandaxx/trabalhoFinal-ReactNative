import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, Image, View } from "react-native";
import { Icon } from "react-native-elements";


import DrawerContent from "../components/customDrawer";
import Login from "../pages/login";
import Home from "../pages/home";
import Categories from "../pages/categories";
import Register from "../pages/registration";
import ChangePassword from "../pages/recoverPassword";
import Profile from "../pages/profile";
import ForgotPassword from "../pages/recoverPassword/forgotPassword";
import Cart from "../pages/cart/cart";
import Favorites from "../pages/favorites/favorites";
import DetalhesProduto from "../pages/detalhesDoProduto.tsx";

const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = ({ route, navigation }: any) => {

    return (
        <DrawerNavigation.Navigator drawerContent={props => <DrawerContent {...props} />}
            screenOptions={() => ({
                headerStyle: {
                    backgroundColor: '#562637',
                    height: 90,
                },
            })}
        >
            <DrawerNavigation.Screen
                name='Home' component={Home}
                options={{
                    headerTintColor: '#FFFFFF',
                    headerRight: () => <Image style={{ width: 110, height: 50, marginLeft: 85, }} source={require('../assets/icone.png')} />,
                }}
            />
            <DrawerNavigation.Screen
                name="Categories" component={Categories}
                options={{
                    headerTintColor: '#FFFFFF',
                    headerRight: () => <Image style={{ width: 110, height: 50, marginLeft: 85, }} source={require('../assets/icone.png')} />,
                }}
            />
            <DrawerNavigation.Screen
                name='Profile' component={Profile}
                options={{
                    headerTintColor: '#FFFFFF',
                    headerRight: () => <Image style={{ width: 110, height: 50, marginLeft: 85, }} source={require('../assets/icone.png')} />,
                }}
            />
            <DrawerNavigation.Screen
                name='Cart' component={Cart}
                options={{
                    headerTintColor: '#FFFFFF',
                    headerRight: () => <Image style={{ width: 110, height: 50, marginLeft: 85, }} source={require('../assets/icone.png')} />,
                }}
            />
            <DrawerNavigation.Screen
                name='Favorites' component={Favorites}
                options={{
                    headerTintColor: '#FFFFFF',
                    headerRight: () => <Image style={{ width: 110, height: 50, marginLeft: 85, }} source={require('../assets/icone.png')} />,
                }}
            />
        </DrawerNavigation.Navigator >
    )
}

const StackNavigation = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Login'
                    component={Login}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='HomeScreen'
                    component={NavigationDrawer}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Categorias'
                    component={Categories}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Register'
                    component={Register}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Alterar senha'
                    component={ChangePassword}
                />

                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Profile'
                    component={Profile}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Cart'
                    component={Cart}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Recuperar senha'
                    component={ForgotPassword}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Favoritos'
                    component={Favorites}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='DetalhesDoProduto'
                    component={DetalhesProduto}
                />
            </StackNavigation.Navigator>
        </NavigationContainer>

    );
}

export default Routes;