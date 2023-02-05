<template>
    <div @click="aboutUser" class="userCard" >
            <h2 class="name">{{user.name}}</h2>
            <p class="userName">{{user.username}}</p>
            <p class="email">{{user.email}}</p>
            <p class="phone">{{user.phone}}</p>
        </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    methods: {
        aboutUser() {
            this.$emit('about',this.user)
        }
    }
} 
</script>

<style scoped>
.userCard{
    background: white;
    width: 380px;
    height: 160px;
    margin: 0px 0px 20px 20px ;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
.name{
    margin: 24px 0px 4px 24px;
}
.userName{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #444444;
    margin: 0px 0px 16px 24px;
}
.email{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #444444;
    margin:0px 0px 4px 24px;
}
.phone{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #444444;
    margin:0px 0px 24px 24px;
}
</style>