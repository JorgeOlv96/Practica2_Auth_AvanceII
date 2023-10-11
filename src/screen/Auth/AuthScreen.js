import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';

import LoginForm from '../../components/auth/login/LoginForm';
import Register from '../../components/auth/register/RegisterForm';
import { styles } from './AuthScreen.styles';
import logo from '../../assets/images/logorym.png';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const cambioAuth = () => {
    setIsLogin(!isLogin);
  }

  const showLogin = () => {
    setIsLogin(prenState => !prenState)
  }


  return (
    <View style={styles.cotainer}>
      <ImageBackground source={require('../../assets/images/fondo.jpg')} style={styles.fondo}>
      <Image style={styles.image} source={logo} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
        {isLogin ? <LoginForm cambioAuth = { cambioAuth } showLogin = { showLogin } /> : <Register cambioAuth = { cambioAuth } showLogin = { showLogin }/>}
      </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

