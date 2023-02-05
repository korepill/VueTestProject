<template>
    <div>
        <div v-if="firstPage" class="mainPage">
            <header class="header">
                <h1>
                    Users
                </h1>
                <div>
                    <my-button @click="firstPage=false,secondPage=true" class="createNewUserButton">Create user</my-button>
                </div>
            </header>
            <user-list @description="aboutUser" :users="users"/>
        </div>
        <about-user @goback="goBack" :user="userInfo" v-if="userInfoPage"/>
        <new-user @create="createUser" v-if="secondPage"/>
    </div>
</template>

<script>
import UserList from '@/components/UsersList.vue'
import MyButton from '@/UI/MyButton.vue'
import NewUser from '@/components/NewUser.vue'
import AboutUser from '@/components/AboutUser.vue'
import axios from 'axios'
    export default{
        components: {
            UserList,MyButton,NewUser,AboutUser,
        },
        data() {
            return{
                users: [],
                firstPage: true,
                secondPage: false,
                userInfoPage: false,
                userInfo: {}
            }
        },
        methods: {
            createUser(user) {
                this.users.push(user)
                this.firstPage = true
                this.secondPage = false
            },
            aboutUser(user) {
                this.userInfo = user
                this.firstPage= false
                this.userInfoPage = true
            },
            goBack(click) {
                this.firstPage=true
                this.userInfoPage = false
            },
            async fetchUsers() {
                try{
                    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                    this.users = response.data
                } catch(e) {
                    alert('Error')
                }
            },
        },
        mounted() {
                this.fetchUsers()
            }
    }
</script>

<style>
.mainPage{
    margin: 0 auto;
    width: 1280px;
    height: 100%;
    background: #FAFAFA;
}
@media(max-width: 390px){
    .mainPage{
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background: #FAFAFA;
        padding-top: 32px;
    }
    .aboutUserHeader{
        display: block;
    }
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 50px 46px;
}
</style>