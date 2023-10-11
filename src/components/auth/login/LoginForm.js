import { View } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import Toast from "react-native-root-toast";
import { globalStyles } from "../../../styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authApi } from "../../../api/auth";
import { useAuth } from "../../../hooks/useAuth";
import { userController } from "../../../api/users";


export default function LoginForm(props) {
  const { cambioAuth } = props;
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        const { email, password } = formData;
        const response = await authApi.login(email, password);
        // console.log("Response Login:", response);
        login(response.jwt);
        await userController.getMe(response.jwt);
      } catch (error) {
        console.log(error);
        Toast.show('Usuario o Contraseña incorrectas', {
          position: Toast.positions.CENTER,
        });
      }
    },
  });

  return (
    <View>
      <TextInput
        label="Correo electronico"
        style={globalStyles.form.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <TextInput
        label="Contraseña"
        style={globalStyles.form.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button
        mode="contained"
        style={globalStyles.form.buttonText}
        onPress={formik.handleSubmit}
      >
        Iniciar sesión
      </Button>
      <Button
        mode="text"
        style={globalStyles.form.buttonSubmit}
        onPress={cambioAuth}
      >
        Crear cuenta
      </Button>
    </View>
  );
}
