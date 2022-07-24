import {
  Center,
  Container,
  Input,
  NativeBaseProvider,
  Text,
  Button,
  Flex,
} from "native-base";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters") // .required("Required")
    .required("Required"),
});
function Register() {
  return (
    <NativeBaseProvider>
      <Center>
        <Text>Register</Text>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <Container>
                {/* Nombre */}
                <Text>Name</Text>
                <Input
                  onChangeText={handleChange("name")}
                  placeholder={"name"}
                  onBlur={() => setFieldTouched("name")}
                ></Input>
                {touched.name && (
                  <Text style={{ color: "red" }}>{errors.name}</Text>
                )}

                {/* Email */}
                <Text>Email</Text>
                <Input
                  onChangeText={handleChange("email")}
                  placeholder={"name"}
                  onBlur={() => setFieldTouched("email")}
                ></Input>
                {touched.email && (
                  <Text style={{ color: "red" }}>{errors.email}</Text>
                )}

                {/* Password */}
                <Text>COntraseña</Text>
                <Input
                  onChangeText={handleChange("password")}
                  placeholder={"name"}
                  onBlur={() => setFieldTouched("password")}
                ></Input>
                {touched.password && (
                  <Text style={{ color: "red" }}>{errors.password}</Text>
                )}

                {/* Submit */}
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Button onPress={handleSubmit} success>
                    Register
                  </Button>
                </Flex>
              </Container>
            </>
          )}
        </Formik>
      </Center>
    </NativeBaseProvider>
  );
}

export default Register;
