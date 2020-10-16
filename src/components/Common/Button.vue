<template>
    <div
        class="my-button"
        :class="[
            type ? `type-${type}` : '',
            size ? `size-${size}` : '',
            disabled ? `button-disabled` : ''
        ]"
        @click="callback">
        <slot></slot>
    </div>
</template>

<script lang="ts">

interface Props {
    size: string;
    disabled: boolean;
}

interface Ctx {
    emit: (name: string) => void;
}

export default {
    name: "my-button",
    props: {
        size: {
            type: String,
            default: "default"
        },
        type: {
            type: String,
            default: "default"
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    
    setup (props: Props, content: Ctx) {
        const { emit } = content;
        // 定义一个函数
        const callback = () => {
            !props.disabled && emit("click")
        }

        return {
           callback
        }
    }
}

</script>


<style lang="scss">
.my-button{
    display: inline-block;
    padding: 0 5px;
    border-radius: 5px;
    border: 1px solid #eee;
    text-align: center;
    box-sizing: border-box;
    & + & {
        margin-left: 10px
    }
    &.type {
        &-default{
            background: #f0f0f0;
            color: #555;
            border-color: #ddd;
        }
        &-primary{
            background: #409EFF;
            color: #fff;
            border-color: #409EFF;
        }
    }
    &.size {
        &-medium{
            padding: 5px 15px;
            line-height: 30px;
        }
        &-small{
            padding: 5px 10px;
            line-height: 20px;
        }
        &-mini{
            padding: 5px 10px;
            line-height: 15px;
        }
    }
}
</style>
