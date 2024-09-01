<template>
    <div>
        <form>
            <div>
                <label>Имя</label>
                <input v-model="form.name" type="text" name="name">
                <span>{{ errors.name }}</span>
            </div>
            <div>
                <label>Email</label>
                <input v-model="form.email" type="email" name="email">
                <span>{{ errors.email }}</span>
            </div>
            <div>
                <label>Пароль</label>
                <input v-model="form.password" type="password" name="password">
                <span>{{ errors.password }}</span>
            </div>
            <div>
                <label>Повторить Пароль</label>
                <input v-model="form.password_confirmation" type="password" name="password_confirmation">
            </div>
            <button type="button" @click="submitForm">Зарегистрироваться</button>
            <NuxtLink to="/login">Есть аккаунт? Авторизоваться</NuxtLink>
        </form>
    </div>
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