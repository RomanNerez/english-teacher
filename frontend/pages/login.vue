<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #title>Вход</template>
        <template #content>
            <div class="flex flex-col gap-2">
                <label for="email">Email</label>
                <InputText v-model="form.email" type="email" id="email" />
                <small></small>
            </div>
            <div class="flex flex-col gap-2">
                <label for="password">Пароль</label>
                <InputText v-model="form.password" type="password" id="password"  />
                <small></small>
            </div>
            <NuxtLink to="/">
                Забыли пароль?
            </NuxtLink>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button class="w-full" @click="login(form)">
                    Войти
                </Button>
            </div>
            <div class="flex gap-4 mt-1">
                <NuxtLink class="w-full" to="/register">
                    <Button class="w-full" link>Зарегистрироваться</Button>
                </NuxtLink>
            </div>
        </template>
    </Card>
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