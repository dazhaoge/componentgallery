<template>
  <dynamic-table :table-data="tableData" :table-header="tableConfig"></dynamic-table>
</template>

<script>
    import dynamicTable from './components/dynamicTable'

    export default {
        name: "Table",
        components: {
            dynamicTable
        },
        data() {
            return {
                // 表数据
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }],
                // 表头数据
                tableConfig: [
                    {
                        id: 100,
                        label: '日期',
                        prop: 'date',
                    },
                    {
                        id: 200,
                        label: '配送日期',
                        prop: '',
                        children: [
                            {
                                id: 210,
                                label: '姓名',
                                prop: 'name',
                            },
                            {
                                id: 220,
                                label: '地址',
                                prop: '',
                                children: [
                                    {
                                        id: 221,
                                        label: '省份',
                                        prop: 'province',
                                    },
                                    {
                                        id: 222,
                                        label: '市区',
                                        prop: 'city',
                                    },
                                    {
                                        id: 223,
                                        label: '地址',
                                        prop: 'address',
                                    },
                                    {
                                        id: 224,
                                        label: '邮编',
                                        prop: 'zip',
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
