<template>
    <div class="form-group">
        <label v-if="label" :for="id">{{ label }}</label>
        <div class="input-group">
            <select
                :id="id"
                v-bind="$attrs"
                v-model="selected"
                :tabindex="tabindex"
                class="form-control form-control-sm"
                :class="{ error: errors.lenght }"
            >
                <slot name="options"/>
            </select>
            <div class="input-group-append">
                <slot name="button"/>
            </div>
        </div>
        <div v-if="errors.lenght" class="form-error">{{ errors[0] }}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch, Ref } from 'vue-property-decorator';

    @Component
    export default class BaseSelectGroup extends Vue {
        inheritAttrs: boolean = false;

        // Props are defined using the Prop decorator
        @Prop({default: `select-input-${Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1) + Math.ceil(1))}`}) protected id!: string;
        //@Prop({ default: "text" }) protected type!: string;
        @Prop() protected value!:string;
        @Prop() protected label!:string;
        @Prop() protected tabindex!: number;
        @Prop({ default:()=>[] }) protected errors!: any[];

        selected: any = this.value;

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

        @Watch("selected")
        private onselected(selected: any): void {
            this.$emit("input", selected);
        }


        // Life cycle methods are declared just like regular methods
        private mounted(): void {
            console.log('BaseSelectGroup component mounted.');
        }


    }
</script>
