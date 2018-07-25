<template>
  <div>
    <v-container grid-list-xs align-center>
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex xs10 md4 pa-4 ma-2>
          <v-form pa-4 ma-2>
            <v-text-field
              v-model.lazy="email"
              :error-messages="emailErrors"
              :label="$t('email')"
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
              :label="$t('password')"
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
  </div>
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
    email: '',
    password: '',
    showPass: false,
    locale: 'en'
  }),

  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push(this.$t('validation.validEmail'))
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
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped lang="scss">
.flex {
  background-color: $main-background-color;
  min-height: 456px;
}
</style>

<i18n>
{
  "en":  {
    "email": "Email",
    "password": "Password",
    "validation" : {
      "validEmail" : "Must be valid e-mail"
    }
  },
  "ro":  {
    "email": "Adresa email",
    "password": "Parola",
    "validation" : {
      "validEmail" : "Adresa de email trebuie sa fie valida"
    }
  },
  "nl":  {
    "email": "Gegevens",
    "password": "Geseim",
    "validation" : {
      "validEmail" : "Email address is slecht"
    }
  }
}
</i18n>
