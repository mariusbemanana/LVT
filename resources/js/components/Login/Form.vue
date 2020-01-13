
<template>
    <div class="card">
        <div class="card-header">
            <slot/>
        </div>

        <div class="card-body">
            <form action="">
                <BaseInput id="login" :tabindex="1" label="Login" v-model="form.login" placeholder="Votre identifiant"/>
                <BaseInput id="password" :tabindex="2" label="Mot de passe" type="password" v-model="form.password" placeholder="Votre mot de passe"/>
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
    export default class LoginForm extends Vue {
        form: any = {
            login: "",
            password: ""
        }
    }
</script>
