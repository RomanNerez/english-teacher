<template>
    <div>
        <form>
            <div>
                <label>Email</label>
                <input v-model="form.email" type="email" name="email">
            </div>
            <div>
                <label>Пароль</label>
                <input v-model="form.password" type="password" name="password">
            </div>
            <button type="button" @click="login(form)">Войти</button>
            <NuxtLink to="/register">Зарегистрироваться</NuxtLink>
        </form>
    </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Вход',
});

definePageMeta({
    layout: 'guest-layout',
    middleware: ['sanctum:guest'],
});

const { login } = useSanctumAuth();

const form = reactive({
    email: '',
    password: '',
});


</script>