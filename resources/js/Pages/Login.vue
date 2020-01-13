<template>
    <div class="container">

        <LoginForm>
            <h6>Formulaire d'authentification</h6>
        </LoginForm>

    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import LoginForm from "../components/Login/Form.vue";

    @Component({
        components: {
            LoginForm
        }
    })
    export default class Login extends Vue {
        @Prop({default: "OK"}) protected app!:any;
    }
</script>
