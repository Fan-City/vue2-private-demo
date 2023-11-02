<template>
    <div class="guanxiPage">
        <div id="guanxi" class="guanxiEcharts"></div>
    </div>
</template>
<script>
    import echarts from 'echarts';
    export default {
        name: "download",
        // 预览测试数据
        data() {
            return {
            }
        },
        created() {
        },
        mounted(){
            this.initEchart()
        },
        methods: {
            initEchart(){
                let guanxiEcharts = echarts.init(document.getElementById('guanxi'));
                let option = {
                    'tooltip': {
                        'show': true,
                        formatter(data){
                            let str = ''
                            if(data.dataType == 'node'){
                                str = '姓名:'+data.name;
                            }else{
                                if(!data.value){return str}
                                str = '人物关系:'+data.value;
                            }
                            return str
                        }
                    },
                    'animationDuration': 0,
                    'animationEasingUpdate': 'quinticInOut',
                    'series': [
                        {
                            'type': 'graph',
                            'layout': 'force',
                            'edgeLabel': {
                                'normal': {
                                    'show': true,
                                    'textStyle': {
                                        'fontSize': 10,
                                        'color': '#000'
                                    },
                                    'formatter': '{c}'
                                }
                            },
                            // 点
                            'nodes': [
                                {
                                    'id': 'A',
                                    'name': '乔布斯',
                                    'value': 444,
                                    'itemStyle': {
                                        'color': '#c60'
                                    },
                                    'symbolSize': 60,
                                    'label': {
                                        'fontSize': 10
                                    }
                                }, {
                                    'id': 'C',
                                    'name': '丽娜·乔布斯',
                                    'value': 444,
                                    'itemStyle': {
                                        'color': '#c60'
                                    },
                                    'symbolSize': 60,
                                    'label': {
                                        'fontSize': 10
                                    }
                                },{
                                    'id': 'H',
                                    'name': '丽莎',
                                    'value': 444,
                                    'itemStyle': {
                                        'color': '#c60'
                                    },
                                    'symbolSize': 60,
                                    'label': {
                                        'fontSize': 10
                                    }
                                }, {
                                    'id': 'D',
                                    'name': '乔布斯',
                                    'value': 444,
                                    'itemStyle': {
                                        'color': '#c60'
                                    },
                                    'symbolSize': 60,
                                    'label': {
                                        'fontSize': 10
                                    }
                                }, {
                                    'id': 'E',
                                    'name': '丽娜·乔布斯',
                                    'value': 444,
                                    'itemStyle': {
                                        'color': '#c60'
                                    },
                                    'symbolSize': 60,
                                    'label': {
                                        'fontSize': 10
                                    }
                                },{
                                    'id': 'b1',
                                    'name': '女儿是',
                                    'value': 444,
                                    'itemStyle': {
                                        'color': '#33c'
                                    },
                                    'symbolSize': 60,
                                    'label': {
                                        'fontSize': 10
                                    }
                                }
                            ],
                            // 链接关系，线
                            'links': [
                                {
                                    'source': 'A',
                                    'target': 'C',
                                    'value': "父女",
                                },
                                {
                                    'source': 'A',
                                    'target': 'H',
                                    'value': "夫妻",
                                },
                                {
                                    'source': 'H',
                                    'target': 'C',
                                    'value': "母女",
                                },
                                {
                                    'source': 'D',
                                    'target': 'b1',
                                    'value': "",
                                }, {
                                    'source': 'b1',
                                    'target': 'E',
                                    'value': "",
                                }
                            ],
                            'edgeSymbol': ['', 'arrow'],
                            // 'categories': [],
                            'roam': 'scale',
                            'label': {
                                'normal': {
                                    'show': true,
                                    'color': '#fff',
                                    'formatter': '{b}',
                                    'fontSize': 8,
                                    'fontStyle': '200',
                                    'position': 'inside'
                                }
                            },
                            'force': {
                                'repulsion': 1000,
                                'gravity': 0.2,
                                'edgeLength': 100,
                                'layoutAnimation': true,
                                'friction': 0.1
                            },
                            'lineStyle': {
                                'color': 'source',
                                'curveness': 0.1
                            },
                            'emphasis': {
                                'focus': 'adjacency',
                                'scale': true,
                                'lineStyle': {
                                    'width': 10
                                }
                            }
                        }
                    ]
                }

                guanxiEcharts.setOption(option)
            }
        }
    };
</script>
<style lang="scss" scoped>
.guanxiPage{
    height: 100%;
    .guanxiEcharts{
        height: 100%;
    }
}
</style>