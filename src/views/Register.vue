<template>
  <div>
  <v-form>
    <v-container id="rowid">
      <v-card elevation="10" outlined width="350" tile>
    <h3 style="margin-top: 10px; margin-bottom: 10px;">Register</h3>
          <v-card-text style="padding: 20px">
          <v-row>
            <v-text-field
                filled
                type="text"
                v-model="firstName"
                label="First Name"
                clearable
              ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
                filled
                type="text"
                v-model="lastName"
                label="Last Name"
                clearable
              ></v-text-field>
          </v-row>
          <v-row>
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
                v-model="email"
                label="Email"
                clearable
              ></v-text-field>
          </v-row>
          <v-row>
              <v-text-field
                filled
                v-model="phone"
                label="Phone"
                placeholder="+123(456)789"
                type="Phone"
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
         <v-btn
          redirect to="/login"
          style="padding: 15px"
          color="primary"
        >
           Back
        </v-btn>
        <v-btn
          style="padding: 15px"
          color="primary"
          @click="register"
        >
            Register
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
   data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    error: false,
    users: [],
  }),
  methods: {
    register() {
      if(localStorage.getItem('users')) {
        this.users = JSON.parse(localStorage.getItem('users'));
        const user = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          username: this.username,
          password: this.password,
        };
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));

      } else {
        this.users = [];

        const user = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          username: this.username,
          password: this.password,
        };

        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
      }
      this.$router.push('login');
    },
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