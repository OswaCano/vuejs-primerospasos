
<template>
  <div>
    <h2>Registro de usuarios</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label>Nombre:</label>
        <Field v-model="nombre" type="text" name="name" id="name" placeholder="Nombre de usuario" required/>
        <ErrorMessage name="name" component="div" />
      </div>
      <div class="form">
        <label>Email:</label>
        <Field v-model="email" type="text" name="email" id="mail" placeholder="Email" required/>
        <ErrorMessage name="email" component="div" />
      </div>
      <div class="form">
        <label>Contraseña:</label>
        <Field v-model="password" type="password" name="password" id="password" placeholder="Contraseña" required/>
        <ErrorMessage name="password" component="div" />
      </div>

      <div class="form">
      <button type="submit">Guardar Registro</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from "vee-validate";
import {schema} from "@/registro/schemas/validationSchema.js";
import {useRegisterStore} from "@/registro/stores/registerStore.js";
import {ref} from "vue";

const store = useRegisterStore();

const nombre = ref();
const email = ref();
const password = ref();

const onSubmit = () => {
  store.saveRegister(nombre.value, email.value, password.value);
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>