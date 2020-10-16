<template>
    <div class="page">
        <h3>{{title}}</h3>
        <div class="content">
            <div class="list">
                <div class="list-item" 
                    v-for="(item, index) in list" 
                    :key="index">
                    <span>序列: NO.{{index + 1}}</span>
                    <span>姓名: {{item.name}}</span>
                    <span>年龄: {{item.old}}</span>
                </div>
            </div>
            <div class="input-box">
                <input type="text" v-model="name" placeholder="请输入姓名">
                <input type="text" v-model="old" placeholder="请输入年龄">
                <button @click="add">添加</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    name: "list",
    data() {
        return {
            title: "一个列表, 熟悉基本用法. defineComponent",
            list: [
                {
                    name: "amujoe",
                    old: 20
                },
                {
                    name: "joe",
                    old: 12
                }
            ],
            name: "",
            old: 0
        }
    },
    methods: {
        add () {
            console.log("add", this.old);
            this.list.push({
                name: this.name,
                old: this.old
            })
        }
    }
});
</script>


<style lang="scss" scoped>
.list{
    width: 500px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #eee;
    box-sizing: border-box;
    .list-item{
        text-align: left;
        font-size: 14px;
        line-height: 26px;
        border-bottom: 1px solid #eee;
        span{
            display: inline-block;
            width: 100px;
        }
    }
}
.input-box{
    input{
        width: 100px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #aaa;
        margin-right: 10px;
    }
    button{
        width: 70px;
        height: 30px;
    }
}
</style>
