import { View, Image } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { globalStyles } from "../../../styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authApi } from "../../../api/auth";
import Toast from "react-native-root-toast";

export default function Register(props) {
  const { cambioAuth } = props;
  const { showLogin } = props;

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      username: Yup.string().required(true),
      password: Yup.string().required(true),
      repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true)
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      console.log("Formulario", formData);
      const { email, username, password } = formData;
      try {
        const response = await authApi.registerUser(email, username, password);
        Toast.show('Se registro correctamente', {
          position: Toast.positions.CENTER,
        });
        showLogin();
        console.log("Response Registro: ", response);
      } catch (error) {
        console.log(error);
      }
    },
  });
  

  return (
    <View>
      <TextInput
        label="Correo Electrónico"
        style={globalStyles.form.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
        
      />
      
      <TextInput
        label="Nombre del usuario"
        style={globalStyles.form.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("username", text)}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <TextInput
        label="Contraseña"
        style={globalStyles.form.input}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <TextInput
        label="Repita la contraseña"
        style={globalStyles.form.input}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
      />

      <Button
        mode="contained"
        style={globalStyles.form.buttonSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      >
        Registrarse
      </Button>
      <Button
        mode="text"
        style={globalStyles.form.buttonText}
        onPress={cambioAuth}
      >
        Iniciar sesión
      </Button>
    </View>
  );
}