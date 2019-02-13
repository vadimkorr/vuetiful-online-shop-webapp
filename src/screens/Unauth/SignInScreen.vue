<template>
  <v-app id="signin" class="primary">
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
                  <v-text-field
                    append-icon="person"
                    label="Login"
                    type="text"
                    v-model="model.login"
                    v-validate="'required'"
                    data-vv-name="login"
                    :error-messages="errors.first('login')"
                  ></v-text-field>
                  <v-text-field
                    append-icon="lock"
                    label="Password"
                    type="password"
                    v-model="model.password"
                    v-validate="'required'"
                    data-vv-name="password"
                    :error-messages="errors.first('password')"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="primary" :to="'/'">Sign Up</v-btn>
                <v-spacer/>
                <v-btn color="primary" @click="signin()">Sign In</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { Validator } from 'vee-validate'
export default {
  data () {
    Validator.localize(this.dictionary)
    return {
      model: {
        login: '',
        password: ''
      },
      dictionary: {
        en: {
          custom: {
            login: {
              required: () => 'Login can not be empty'
            },
            password: {
              required: () => 'Password can not be empty'
            }
          }
        }
      }
    }
  },
  methods: {
    signin () {
      console.log(this.model)
    }
  }
}
</script>

<style>
  #signin {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
</style>
