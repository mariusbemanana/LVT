
<template>
    <div class="card">
        <div class="card-header">
            <slot/>
        </div>

        <div class="card-body">
            <form action="">
                <BaseInput id="login" :tabindex="1" label="Login" v-model="form.login" placeholder="Votre identifiant"/>
                <BaseInput id="password" :tabindex="2" label="Mot de passe" type="password" v-model="form.password" placeholder="Votre mot de passe"/>
                <BaseInput id="confirm_password" :tabindex="3" label="Confirmer mot de passe" type="password" v-model="form.confirm_password" placeholder="Confimer votre mot de passe"/>
            </form>
        </div>

        <div class="card-footer">
            <button type="submit" class="btn btn-primary btn-sm">Se connecter</button>
        </div>
    </div>

</template>

<script lang="ts">

    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import BaseInput from "../Shared/Base/BaseInput.vue";

    @Component({
        components: {
            BaseInput
        }
    })
    export default class RegisterForm extends Vue {
        form: any = {
            login: "",
            password: "",
            confirm_password: ""
        }
    }
</script>
