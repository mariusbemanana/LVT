<template>
    <div class="container">
       <h3>Dashboard</h3>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

    @Component
    export default class Dashboard extends Vue {
        @Prop({default: "OK"}) protected app!:string;
    }
</script>
