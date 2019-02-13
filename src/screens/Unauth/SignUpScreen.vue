<template>
  <v-app id="signup" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm6 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="@/assets/logo.png" alt="Online Store Logo" width="120" height="120">
                  <h1 class="flex my-4 primary--text">Online Store</h1>
                </div>
                <v-form>
                  <v-text-field append-icon="person" name="login" label="Login" type="text" v-model="model.username"></v-text-field>
                  <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password" v-model="model.password"></v-text-field>
                  <v-text-field append-icon="lock" name="confirm-password" label="Confirm Password" id="confirm-password" type="password" v-model="model.confirmPassword"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="primary" :to="'/signin'">Sign In</v-btn>
                <v-spacer/>
                <v-btn color="primary" @click="signup()">Sign Up</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      model: {
        username: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  mounted: function () {
    console.log(' mounted SignIn screen ')
  },
  methods: {
    signup () {

    }
  },
  computed: {

  },
  components: {

  }
}
</script>

<style>
  #signup {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
</style>
