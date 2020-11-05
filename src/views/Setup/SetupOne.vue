<template>
    <div class="page">
        <h4>setup, 用于封装、拆分组件. 特点:</h4>
        <h5>更方便, 简单</h5>
        
       
        <div class="content">
            <h5>ref 响应式值: {{count}}</h5>
            <h5>reactive 响应式的对象: {{obj.name}}</h5>
            <h5>计算属性(10倍): {{computedOne}} </h5>
            <h5>计算属性(100倍): {{computedMore["x100"]}} </h5>
            <h5>计算属性(1000倍): {{computedMore["x1000"]}} </h5>
             <button @click="countAdd">原生按钮</button>
             <myButton size="small" type="primary" @click="countAdd">私有封装的组件</myButton>
             <myButton size="mini" type="default" @click="countAdd">私有按钮 mini</myButton>
        </div>
    </div>
</template>

<script lang="ts">
import myButton from '@/components/Common/Button.vue';
import { 
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    ref,
    reactive,
    computed
    } from 'vue'

/**
 * 生命周期是从 vue 中导出的，我们需要用到哪些，就导出哪些
 */

/**
 * 
 * ref 其作用为创建响应式的值
 * ref, 返回一个响应式对象, 改变会被追踪到, 会重新渲染
 * 
 * reactive 其作用为创建响应式的对象或数组
 * 
 */

/**
 * 
 * etup, 用于封装、拆分组件. 特点
 * 在声明周期 beforeCreate 事件之前被调用
 * 可以返回一个对象，这个对象的属性被合并到渲染上下文，并可以在模板中直接使用
 * 
 *  */ 

/**
 * 
 * computed
 * 
 * 
 */


const page = {
    name: "list",
    components: { myButton },
    setup() {
        const obj = reactive({
            name: "amujoe",
            old: 12
        })

        const count = ref(0)
        // 其他的生命周期都写在这里
        onBeforeMount (() => {
            count.value++
            console.log('onBeforeMount', count.value)
        })
        onMounted (() => {
            count.value++
            console.log('onMounted', count.value)
        })
        // 注意，onBeforeUpdate 和 onUpdated 里面不要修改值，会死循环的哦！
        onBeforeUpdate (() => {
            console.log('onBeforeUpdate', count.value)
        })
        onUpdated (() => {
            console.log('onUpdated', count.value)
        })
        onBeforeUnmount (() => {
            count.value++
            console.log('onBeforeUnmount', count.value)
        })
        onUnmounted (() => {
            count.value++
            console.log('onUnmounted', count.value)
        })

        // 定义一个函数，修改 count 的值。
        const countAdd = () => {
            count.value++
            obj.name = "amujoe" + count.value;
        }

        // 单个计算属性
        const computedOne = computed(() => {
            return count.value * 10
        })

        const computedMore = computed(() => {
            return {
                "x100": count.value * 100,
                "x1000": count.value * 1000
            }
        })

        return {
            count,
            countAdd,
            obj,
            computedOne,
            computedMore
        }
    }
}

 console.log("page", page);

export default (page);
</script>


<style lang="less" scoped>
.content{
    width: 500px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #eee;
    text-align: left;
    box-sizing: border-box;
}
</style>
