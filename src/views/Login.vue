<template>
  <div>
  <v-form>
    <v-container id="rowid">
      <v-card elevation="10" outlined width="350" tile>
    <h3 style="margin-top: 10px; margin-bottom: 10px;">Log In</h3>
          <v-card-text style="padding: 20px">
          <v-row>
          <v-alert
            color="error"
            :value="error"
            icon="close"
          >
            The username or password are incorrect
          </v-alert>
            <v-text-field
            filled
                type="text"
                v-model="username"
                label="Username"
                clearable
              ></v-text-field>
          </v-row>
          <v-row>
              <v-text-field
                filled
                v-model="password"
                type="password"
                label="Password"
                clearable
              ></v-text-field>
          </v-row>
        </v-card-text>
        <v-card-actions id="loginid">
        <v-btn redirect to="/register"
          style="padding: 15px"
          color="primary"
        >
            Register
        </v-btn>
        <v-btn
          @click="login"
          style="padding: 15px"
          color="primary"
        >
          Log In
        </v-btn> 
        </v-card-actions>
      </v-card>
    </v-container>
        <a href=".." class="text-blueGray-200">
          <small>Forgot password</small>
        </a>
  </v-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    username: '',
    password: '',
    error: false
  }),
  methods:{
    login(){
      const users = JSON.parse(localStorage.getItem('users'));

      const registeredUsers = users.filter(u => u.username === this.username && u.password === this.password);

      if (registeredUsers.length) {
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        this.$router.push('/');
      } else {
        // Show message
        console.log('Username or password incorect!');
        localStorage.setItem('isAuthenticated', JSON.stringify(false));
      }
    }
  }

}
</script>

<style>

#rowid{
  display:flex;
  justify-content: center;
  padding-top: 20px;
}
#loginid{
  justify-content: end;
}


</style>