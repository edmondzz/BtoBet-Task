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
                v-model="me"
                label="First Name"
                clearable
              ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
                filled
                type="text"
                v-model="me"
                label="Last Name"
                clearable
              ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
                filled
                type="text"
                v-model="me"
                label="Username"
                clearable
              ></v-text-field>
          </v-row>
          <v-row>
              <v-text-field
                filled
                v-model="msg1"
                label="Email"
                clearable
              ></v-text-field>
          </v-row>
          <v-row>
              <v-text-field
                filled
                v-model="msg1"
                label="Phone"
                placeholder="+123(456)789"
                type="Phone"
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