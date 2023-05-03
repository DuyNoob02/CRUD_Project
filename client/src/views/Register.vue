
<template>
    <AppHeader />
    <div>
        <div class="register">
            <form id="register-form" @submit.prevent="handleSubmit">
                <h2 >Đăng ký</h2>
                <div>
                    <label>Tên đăng nhập:</label>
                    <input type="text" v-model="username"/>
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" v-model="password"/>
                </div>
                <button class="register-btn">Đăng ký</button>
                <div v-if="errorMessage">{{ errorMessage }}</div>
            </form>
        </div>
    </div>
    <AppFooter />
</template>

<script>
import axios from 'axios';
import userAPI from '@/service/userAPI';
import router from '@/router';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue'
export default {
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        handleSubmit() {
            try {
                const data = {
                    username: this.username,
                    password: this.password
                }
                const result = axios.post('http://localhost:5000/user/register', data)
                result.then((response) => {
                    console.log(response);
                    if (response.statusText === "Created") {
                        const token = response.data.token;
                        localStorage.setItem("token", JSON.stringify(token))
                        router.push('/login');
                    }

                })
            } catch (error) {
                console.log(error);
            }

        }
    },
};
</script>

<style scoped>
.register {
    min-height: 500px;
    margin: auto;
    display: flex;
    justify-content: center;
}

#register-form{
    height: 300px;
    padding: 20px;
    max-width: 330px;
    width: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
}

h2{
    text-transform: uppercase;
    text-align: center;
    background-color: rgb(74, 74, 248);
    padding: 10px;
    margin: -20px;
    margin-bottom: 10px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
}
form div {
    display: flex;
    flex-direction: column;
    gap:  10px;
    margin-top: 10px;
}

input{
    border: 1px solid #333;
    height: 30px;
    margin-top: -10px;
}

.register-btn{
    margin-top: 15px;
    background-color: aquamarine;
    padding: 5px;
    text-align: centers;
}
.register-btn:hover{
    background-color: rgb(15, 236, 162);
}

</style>



