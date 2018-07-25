<template>
  <v-container grid-list-xs align-center>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs10 md4>
        <v-form>
          <v-text-field
            v-model.lazy="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model.lazy="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            :append-icon="showPass ? 'visibility_off' : 'visibility'"
            :type="showPass ? 'text' : 'password'"
            @click:append="showPass = !showPass"
            v-model.lazy="password"
            :error-messages="passwordErrors"
            label="Password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          ></v-text-field>
          <v-btn @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email, alphaNum } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required, alphaNum, minLength: minLength(8) }
  },

  data: () => ({
    name: '',
    email: '',
    password: '',
    showPass: false
  }),

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.alphaNum && errors.push('Must be valid alpha-numeric values')
      !this.$v.password.minLength && errors.push('Must be at least 8 characters')
      !this.$v.password.required && errors.push('Password is required')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
      this.$router.push('/locations')
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>

</style>
