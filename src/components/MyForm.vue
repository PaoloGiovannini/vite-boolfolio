<template>
    <div class="container">

        <div v-if="send" class="alert alert-primary" role="alert">
            Messaggio inviato con successo!
        </div>
        <form @submit.prevent="sendMyForm()">
            <div class="mb-3">
                <label for="email" class="form-label">La tua email</label>
                <input type="email" class="form-control" :class="{ 'is-invalid': errors.email }" id="email" v-model="email">
                <div class="invalid-feedback" v-for="error in errors.email">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Il tuo nome</label>
                <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" id="name" v-model="name">
                <div class="invalid-feedback" v-for="error in errors.name">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="message">Il tuo messaggio</label>
                <textarea class="form-control" :class="{ 'is-invalid': errors.message }" id="message"
                    v-model="message"></textarea>
                <div class="invalid-feedback" v-for="error in errors.message">
                    {{ error }}
                </div>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="pending">
                {{ pending ? 'Invio in corso...' : 'Invia messaggio' }}
            </button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "MyForm",
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            send: false,
            pending: false,
            errors: {}
        }
    },
    methods: {
        sendMyForm() {

            this.send = false
            this.pending = true;
            this.errors = {};

            axios.post(`${this.store.url}/api/contacts`,
                {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }
            ).then(response => {
                if (response.data.success) {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    this.send = true;
                } else {
                    this.errors = response.data.errors;
                }

                this.pending = false;
            }).catch(error => {
                this.pending = false;
            });
        }
    }
}
</script>