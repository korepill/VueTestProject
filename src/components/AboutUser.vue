<template>
    <div>
        <div class="aboutUser">
            <header class="aboutUserHeader">
                <h1>{{user.name}}</h1>
                <p>@{{user.username}}</p>
            </header>
            <main class="UserInformation">
                <div class="UserDescription">
                    <h2>Email</h2>
                    <p>{{user.email}}</p>
                </div>
                <div class="UserDescription">
                    <h2>Phone</h2>
                    <p>{{user.phone}}</p>
                </div>
                <div class="UserDescription">
                    <h2>Website</h2>
                    <p>{{user.website}}</p>
                </div>
                <div class="UserDescription">
                    <h2>Company</h2>
                    <p>{{user.company.name}}</p>
                </div>
                <div class="UserDescription">
                    <h2>Address</h2>
                    <p>{{user.address.suite}}, {{user.address.street}}, {{user.address.city}}, {{user.address.zipcode}}</p>
                </div>
            </main>
            <img class="goBack" @click="goBack" src="../../assets/back.png" width="30" height="30" alt="">
        </div>
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
        goBack() {
            this.$emit('goback')
        }
    }
}
</script>
<style scoped>
.aboutUser{
    margin: 0 auto;
    width: 1280px;
    height: 832px;
    background: #FAFAFA;
}
.UserInformation{
    margin: 0px 50px 100px 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.aboutUserHeader{
    display: flex;
    align-self: start;
}
h1{
    margin: 0px 16px 48px 50px;
}
h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
}
p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
}
.goBack{
    margin-left: 50px;
    cursor: pointer;
}
@media(max-width: 390px) {
    .aboutUser{
        margin: 0 auto;
        width: 100%;
        height: 832px;
        background: #FAFAFA;
        padding-top: 32px;
    }
    .UserInformation{
        display: block;
        margin-left: 20px;
        margin-bottom: 30px
    }
    .UserDescription{
        margin-bottom: 32px;
    }
    .aboutUserHeader{
        display: block;
        margin: 0px 60px 32px 20px;
    }
    h1{
        margin: 0;
        margin-bottom: 8px;
    }
    h2{
        margin-bottom: 8px;
    }
    .goBack{
        margin-left: 20px;
        cursor: pointer;
    }
}
</style>