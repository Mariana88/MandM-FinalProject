<template>
        <div class="container">
            <div class="row">
                <div class="col-md-4 offset-4">
                    <form>
                        <div class="form-group">
                            <label for="email">Email </label>
                            <input type="email" id="email" placeholder="Email" class="form-control" autofocus required v-model="user.email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Password" class="form-control" required v-model="user.password">
                        </div>
                        <input  type="button" value="Log in" class="btn btn-primary" v-on:click="logUser()" />
                    </form>
                </div>
             </div>
        </div>
</template>

<script>
export default {
    name: "login",
    data: function(){
        return{ 
            user:{
                    email: undefined,
                    password: undefined    
        }}
    },
    methods: {
        logUser: function(){
            console.log(`email: ${this.user.email} password: ${this.user.password}`)
            fetch(`http://localhost:3001/api/user/authenticate/${this.user.email}/${this.user.password}`, {
                mode: 'cors'
            })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.log(error));
        }
    }
};
</script>

