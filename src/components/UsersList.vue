<template>
   <main class="userList">
        <user-card @about="aboutUser" :user="user" v-for="user in users"/>
    </main> 
</template>

<script>
import UserCard from '@/components/UserCard.vue'
export default {
    components: {
        UserCard,
    },
    props: {
        users: {
            type: Array,
            required: true,
        }
    },
    methods: {
        aboutUser(user) {
            this.$emit('description',user)
        }
    }
}
</script>

<style scoped>
.userList{
    display: flex;
    flex-wrap: wrap;
    margin: 0 50px 0px 30px;
}
</style>