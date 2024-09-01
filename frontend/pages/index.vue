<template>
    <div>
        Index
        <button @click="logout">Выйти</button>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()

useHead({
  title: 'Dashboard',
});

definePageMeta({
    layout: 'auth-layout',
    middleware: ['sanctum:auth'],
});

const { logout } = useSanctumAuth();

const _logout = async () => {
    await logout();

    router.push('/login');
}

</script>