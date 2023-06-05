<template>
    <div class="container">
        <form @submit.prevent="sendMyForm()">
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Nome:</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="mb-3">
                <label for="message">Messaggio:</label>
                <textarea class="form-control" id="message" v-model="message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Invio</button>
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
        }
    },
    methods:{
        sendMyForm(){

            
            axios.post(`${this.store.url}/api/contacts`,
            {
                name: this.name,
                email: this.email,
                message: this.message,
            }
            ).then(response =>{
                console.log(response);
            })
        }
    }
}
</script>