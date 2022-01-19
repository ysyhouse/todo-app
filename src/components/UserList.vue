<template>
<div>
    User List
    <div v-for="user in users" :key="user.id"> {{ user.name}}</div>
</div>
    
</template>

<script>
import {mapState , mapActions} from 'vuex';

export default {
  
    created(){
        
        this.getUsers();
       

    },

    computed :{

        ...mapState('user',['users'])
        // ...mapState({
        //     people : state=>state.user.users //'users'
        // })
        // users(){
        //     return this.$store.state.users;
        // }
    },
    methods:{
        ...mapActions('user',[ 'getUsers']),

        // getUsers(){ 
        //     this.$store.dispatch('getUsers');
        // }
    }
}
</script>