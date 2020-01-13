<template>
    <div class="container">

        <RegisterForm>
            <h6>Formulaire d'enregistrement</h6>
        </RegisterForm>

    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import RegisterForm from "../components/Register/Form.vue"

    @Component({
        components: {
            RegisterForm
        }
    })
    export default class Register extends Vue {
        @Prop({default: "OK"}) protected app!:any;
    }
</script>
