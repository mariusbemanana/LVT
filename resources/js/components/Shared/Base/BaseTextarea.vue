<template>
    <div class="form-group">
        <label v-if="label" :for="id">{{ label }}</label>
        <textarea
            :id="id"
            v-bind="$attrs"
            :tabindex="tabindex"
            class="form-control form-control-sm"
            :value="value"
            @input="$emit('input', $event.target.value)"
        ></textarea>
        <div v-if="errors.lenght" class="form-error">{{ errors[0] }}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch, Ref } from 'vue-property-decorator';

    @Component
    export default class BaseTextarea extends Vue {
        inheritAttrs: boolean = false;

        // Props are defined using the Prop decorator
        @Prop({default: `text-textarea-${Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1) + Math.ceil(1))}`}) protected id!: string;
        @Prop() protected value!:string;
        @Prop() protected label!:string;
        @Prop() protected tabindex!: number;
        @Prop({ default:()=>[] }) protected errors!: any[];

        public $ref!: Vue["$refs"] & {
            input: HTMLFormElement;
        }


        focus() {
            //@ts-ignore
            this.$refs.input.focus();
        }

        select() {
            //@ts-ignore
            this.$refs.input.select();
        }

        selectionRange(start: any, end: any) {
            //@ts-ignore
            this.$refs.input.setSelectionRange(start, end);
        }


        // Life cycle methods are declared just like regular methods
        private mounted(): void {
            console.log('BaseTextarea component mounted.');
        }


    }
</script>
