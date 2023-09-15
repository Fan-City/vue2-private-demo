<template>
    <div>
        <el-select v-model="aaaa">
            <el-option v-for="(item,index) in options" :key="index" :value="item.value" :label="item.value" />
        </el-select>
    </div>
</template>
<script>
export default {
    data() {
        return { 
            aaaa: 12313,
            options:[
                {
                    name: '123',
                    value: 12313
                },
                {
                    name: '123',
                    value: 123
                }
            ]
        };
    },
};
</script>