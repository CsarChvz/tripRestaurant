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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
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
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <>
              <Container>
                <Text>Name</Text>
                <Input
                  onChangeText={handleChange("name")}
                  placeholder={"name"}
                ></Input>
                <Text style={{ color: "red" }}>{errors.name}</Text>
                <Text>Email</Text>
                <Input
                  onChangeText={handleChange("email")}
                  placeholder={"name"}
                ></Input>
                <Text style={{ color: "red" }}>{errors.email}</Text>
                <Text>COntraseña</Text>
                <Input
                  onChangeText={handleChange("password")}
                  placeholder={"name"}
                ></Input>
                <Text style={{ color: "red" }}>{errors.password}</Text>
                <Text>Repetir COntraseña</Text>
                <Input
                  onChangeText={handleChange("confirmPassword")}
                  placeholder={"name"}
                ></Input>
                <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
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
