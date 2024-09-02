<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #title>Регистрация</template>
        <template #content>
            <div class="flex flex-col gap-2">
                <label for="name">Имя</label>
                <InputText v-model="form.name" id="name" />
                <small>{{ errors.name }}</small>
            </div>
            <div class="flex flex-col gap-2">
                <label for="email">Email</label>
                <InputText v-model="form.email" type="email" id="email" />
                <small>{{ errors.email }}</small>
            </div>
            <div class="flex flex-col gap-2">
                <label for="password">Пароль</label>
                <InputText v-model="form.password" type="password" id="password"  />
                <small>{{ errors.password }}</small>
            </div>
            <div class="flex flex-col gap-2">
                <label for="password">Повторить Пароль</label>
                <InputText v-model="form.password_confirmation" type="password" id="password"  />
                <small>{{ errors.password_confirmation }}</small>
            </div>
            <NuxtLink to="/">
                Забыли пароль?
            </NuxtLink>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button class="w-full" @click="submitForm">
                    Зарегистрироваться
                </Button>
            </div>
            <div class="flex gap-4 mt-1">
                <NuxtLink class="w-full" to="/login">
                    <Button class="w-full" link>Есть аккаунт? Авторизоваться</Button>
                </NuxtLink>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
const router = useRouter()

useHead({
  title: 'Регистрация',
});

definePageMeta({
    layout: 'guest-layout',
    middleware: ['sanctum:guest'],
});

const { login } = useSanctumAuth();
const client = useSanctumClient();

const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const errors = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const submitForm = async () => {
    const { data, error, refresh } = await useAsyncData('register', () =>
        client('/api/v1/auth/register', {
            method: 'post',
            body: form
        })
    );

    const _errors: FetchError | null = error.value;

    if (_errors) {
        errors.name = _errors.data.errors?.name?.[0] || '';
        errors.email = _errors.data.errors?.email?.[0] || '';
        errors.password = _errors.data.errors?.password?.[0] || '';
        errors.password_confirmation = _errors.data.errors?.password_confirmation?.[0] || '';
        return;
    }

    login({email: form.email, password: form.password });
}



</script>