import { defineStore } from 'pinia';
import userAPI from '../service/userAPI';


export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        currentUser: {},
        allUsers: [],
        errorMessage: null,
        stateLogin: false
    }),
    getters: {
        getInforUser(){
            return  this.currentUser
        },

        getStateLogin(){
            return  this.stateLogin
        }  ,
        

    },
    actions: {
        setInforUser(data){
            return this.currentUser = data
        },

        setStateLogin(state){
            // return this.stateLogin = state;
           return  this.stateLogin = state
        },
        removeInfoUser (){
            return   localStorage.removeItem('info')
        }
     
    }
});