<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <ul>
                    <li><router-link to="/login">Login</router-link></li>
                    <li><router-link to="/register">Register</router-link></li>
                    <li><router-link to="/dashboard">Tableau de bord</router-link></li>
                </ul>
                <router-view></router-view>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    

    @Component
    export default class App extends Vue {
        // Props are defined using the Prop decorator
        @Prop({default: 'Unknown'}) protected userName!: string;

        user: any = null;
        loading: boolean = false;
        initiated: boolean = false;


        init(){
            this.loading = true;

            window.axios.get("auth/init").then(response => {
                this.user = response.data;
                this.loading = false;
                this.initiated = true;
            })
        }
        

        // Life cycle methods are declared just like regular methods
        private mounted(): void {
            this.init();
            console.log('App component mounted.');
        }

        // Computed properties are written as getters
        protected get backwardsUserName(): string {
            return this.userName.split('').reverse().join('');
        }

        // Watchers become much cleaner with Typescript decorators, just place the decorator above
        // the function that will run.
        @Watch('userName')
        private onNameChanged(newName: string): void {
            alert(`I see that you changed your name! ${newName} it is then.`);
        }
    }
</script>
