<template>
    <div>
        <div class="createUser">
            <h1>Create User</h1>
            <div class="createForm">
                <div>
                    <p>Name</p>
                    <input 
                    class="myInput"
                    v-model="user.name"
                    type="text"
                    @input="createPost"
                    />
                    <div v-if="reminder" class="reminderRow">Это поля обязательно</div>
                    <div v-if="!reminder" class="deReminderRow"></div>
                </div>
                <div>
                    <p>Username</p>
                    <input
                    class="myInput"
                    v-model="user.username"
                    type="text"
                    @input="createPost"
                    />
                    <div v-if="reminder1" class="reminderRow">Это поля обязательно</div>
                </div>
                <div>
                    <p>Email</p>
                    <input
                    class="myInput" 
                    v-model="user.email"
                    type="text"
                    @input="createPost"
                    />
                    <div v-if="reminder2" class="reminderRow">Это поля обязательно</div>
                </div>
                <div>
                    <p>Phone</p>
                    <input 
                    class="myInput"
                    v-model="user.phone"
                    type="text"
                    @input="createPost"
                    />
                    <div v-if="reminder3" class="reminderRow">Это поля обязательно</div>
                    <div v-if="!reminder3" class="deReminderRow"></div>
                </div>
                <div>
                    <p>Website</p>
                    <input
                    class="myInput"
                    v-model="user.website"
                    type="text"
                    @input="createPost"
                    />
                    <div v-if="reminder4" class="reminderRow">Это поля обязательно</div>
                </div>
                <div>
                    <p>Company</p>
                    <input 
                    class="myInput"
                    v-model="user.company"
                    type="text"
                    @input="createPost"
                    />
                    <div v-if="reminder5" class="reminderRow">Это поля обязательно</div>
                </div>
                <div>
                    <p>City</p>
                    <input 
                    class="myInput"
                    v-model="user.city"
                    type="text"
                    @input="createPost"
                    />
                    <div v-if="reminder6" class="reminderRow">Это поля обязательно</div>
                    <div v-if="!reminder6" class="deReminderRow"></div>
                </div>
                <div>
                    <p>Street</p>
                    <input 
                    class="myInput"
                    v-model="user.street"
                    type="text"
                    @input="createPost"
                    />
                    <div v-if="reminder7" class="reminderRow">Это поля обязательно</div>
                </div>
                <div>
                    <p>Suite</p>
                    <input
                    class="createUserInput"
                    type="text"
                    v-model="user.suite"
                    @input="createPost"
                    />
                    <div v-if="reminder8" class="reminderRow">Это поля обязательно</div>
                </div>
                <div>
                    <p>Zipcode</p>
                    <input 
                    class="createUserInput" 
                    type="number"
                    v-model="user.zipcode"
                    @input="createPost"
                    >
                    <div v-if="reminder9" class="reminderRow">Это поля обязательно</div>
                </div>
            </div>
            <my-button @click="createUser" class="createUserButton">Create User</my-button>
        </div>
    </div>

</template>
<script>
import MyButton from '@/UI/MyButton.vue'
export default{
    components:{
        MyButton
    },
    data() {
        return {
            user: {
                name: '',
                username: '',
                email: '',
                phone: '',
                website: '',
                company: '',
                city: '',
                street: '',
                suite:'',
                zipcode:'',
            },
            reminder: false,
            reminder1: false,
            reminder2: false,
            reminder3: false,
            reminder4: false,
            reminder5: false,
            reminder6: false,
            reminder7: false,
            reminder8: false,
            reminder9: false,

        }
    },
    methods: {
        createPost() {
                
                if(this.user.name != ''){
                    this.reminder = false
                }
                
                if(this.user.username != ''){
                    this.reminder1= false
                }
               
                if(this.user.email != ''){
                    this.reminder2= false
                }
               
                if(this.user.phone != ''){
                    this.reminder3= false
                }
                
                if(this.user.website != ''){
                    this.reminder4= false
                }
                
                if(this.user.company != ''){
                    this.reminder5= false
                }
                
                if(this.user.city != ''){
                    this.reminder6 = false
                }
                
                if(this.user.street != ''){
                    this.reminder7 = false
                }
               
                if(this.user.suite != ''){
                    this.reminder8 = false
                }
               
                if(this.user.zipcode != ''){
                    this.reminder9 = false
                }
            },
            createUser() {
                if(this.user.name === '')
                {
                    this.reminder = true
                }
                if(this.user.username === '')
                {
                    this.reminder1 = true
                }
                if(this.user.email === '')
                {
                    this.reminder2 = true
                }
                if(this.user.phone === '')
                {
                    this.reminder3 = true
                }
                if(this.user.website === '')
                {
                    this.reminder4 = true
                }
                if(this.user.company === '')
                {
                    this.reminder5 = true
                }
                if(this.user.city === '')
                {
                    this.reminder6 = true
                }
                if(this.user.street === '')
                {
                    this.reminder7 = true
                }
                if(this.user.suite === '')
                {
                    this.reminder8 = true
                }
                if(this.user.zipcode === '')
                {
                    this.reminder9 = true
                }
                if((this.user.name && this.user.username && this.user.email && this.user.phone && this.user.website && this.user.company && this.user.city && this.user.street && this.user.suite && this.user.zipcode) != '')
                {
                    this.user.id = Date.now();
                    this.$emit('create',this.user)  
                }
            }
    } 
}
</script>
<style scoped>
.createUser{
    margin: 0 auto;
    width: 1280px;
    height: 832px;
    background: #FAFAFA;
}
h1{
    margin: 0px 0px 48px 50px;
}
p{
    margin-left: 20px;
}
.createUserInput{
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    height: 40px;
    width: 180px;
    border-radius: 0px;
    border: none;
    margin: 8px 0px 8px 20px;
    padding: 0;
}
.myInput{
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    height: 40px;
    width: 380px;
    border-radius: 0px;
    border: none;
    margin: 8px 0px 8px 20px;
    padding: 0;
}
.reminderRow{
    color: red;
    font-size: 12px;
    margin: 0px 0px 22px 20px;
}
.deReminderRow{
    margin: 0px 0px 22px 20px;
    height: 2px;
}
.createUserButton{
    margin-left: 50px;
}
.createForm{
    display: flex;
    flex-wrap: wrap;
    margin: 0px 50px 48px 30px
}
@media(max-width: 390px){
    .createUser{
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background: #FAFAFA;
        padding-top: 32px;
    }
    h1{
        margin: 0px 0px 32px 20px;
    }
    .createForm{
        margin: 0px 0px 0px 20px;
    }
    .createUserInput{
        background: #FFFFFF;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
        height: 40px;
        width: 350px;
        border-radius: 0px;
        border: none;
        margin: 0px;
        margin: 8px 0px 32px 0px;
        padding: 0;
    }
    .myInput{
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    height: 40px;
    width: 350px;
    border-radius: 0px;
    border: none;
    margin: 8px 0px 32px 00px;
    padding: 0;
}
    p{
        margin: 0px;
    }
    .createUserButton{
        margin-left: 20px;
        margin-bottom: 32px;
    }
}
</style>