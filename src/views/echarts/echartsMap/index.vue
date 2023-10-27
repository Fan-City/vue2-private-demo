<template>
    <div class="echartMap-container">
        <div id="mapContainer"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import chinaMap from './json/zg.json'
export default {
    data() {
        return {
            mapChart: null
        };
    },
    methods: {
        initMap() {
            this.mapChart = echarts.init(document.getElementById('mapContainer'));
            echarts.registerMap('chinaMap', chinaMap, {})
            let geoCoordMap = {
                美洲区1: [116.4551, 40.2539],
                美洲区2: [114.4551, 39.2539],
                美洲区3: [112.4551, 41.2539],
                欧洲区1: [116.4551, 40.2539],
                欧洲区2: [116.4551, 40.2539],
                欧洲区3: [116.4551, 40.2539],
                亚太区1: [116.4551, 40.2539],
                亚太区2: [116.4551, 40.2539],
                亚太区3: [116.4551, 40.2539],
                京津冀: [116.4551, 41.3539],
                长三角: [118.8062, 31.9208],
                粤港澳: [114.42244, 24.509505],
                陕川渝: [103.9526, 30.7617],
                江苏: [118.8062, 31.9208],
                黑龙江: [127.9688, 45.368],
                内蒙古: [110.3467, 41.4899],
                吉林: [125.8154, 44.2584],
                北京: [116.4551, 40.2539],
                辽宁: [123.1238, 42.1216],
                河北: [114.4995, 38.1006],
                天津: [117.4219, 39.4189],
                山西: [112.3352, 37.9413],
                陕西: [109.1162, 34.2004],
                甘肃: [103.5901, 37.3043],
                宁夏: [106.3586, 38.1775],
                青海: [101.4038, 36.8207],
                新疆: [87.9236, 43.5883],
                四川: [103.9526, 30.7617],
                重庆: [108.384366, 30.439702],
                山东: [117.1582, 36.8701],
                河南: [113.4668, 34.6234],
                安徽: [117.29, 32.0581],
                湖北: [114.3896, 30.6628],
                浙江: [119.5313, 29.8773],
                福建: [119.4543, 25.9222],
                江西: [116.0046, 28.6633],
                湖南: [113.0823, 28.2568],
                贵州: [106.6992, 26.7682],
                云南: [102.9199, 25.4663],
                广东: [113.12244, 23.009505],
                广西: [108.479, 23.1152],
                海南: [110.3893, 19.8516],
                上海: [121.4648, 31.2891],
                西藏: [91.141017, 29.668461]
            }
            let geoCoordMap1 = {
                内蒙古: [112.3467, 41.4899],
                贵州: [108.9992, 28.0682],
            }
            let geoCoordMap2 = {
                京津冀: [116.4551, 41.3539],
                长三角: [118.8062, 32.4208],
                粤港澳: [113.12244, 23.809505],
                陕川渝: [103.9526, 30.7617]
            }
            let geoCoordMap3 = {
                黑龙江: [127.9688, 45.368],
                内蒙古: [113.3467, 42.4899],
                吉林: [125.2154, 44.9584],
                辽宁: [123.1238, 42.1216],
                山西: [112.3352, 39.2413],
                甘肃: [103.5901, 37.1043],
                宁夏: [106.3586, 38.1775],
                青海: [95.4038, 36.8207],
                新疆: [87.9236, 43.5883],
                山东: [117.1582, 36.8701],
                河南: [113.4668, 34.6234],
                湖北: [114.3896, 30.6628],
                福建: [119.0543, 27.5222],
                江西: [116.0046, 28.6633],
                湖南: [113.0823, 28.2568],
                贵州: [107.7992, 27.97682],
                云南: [102.9199, 23.6663],
                广西: [108.479, 24.8152],
                海南: [110.3893, 19.8516],
                西藏: [91.141017, 29.668461]
            }
            let geoCoordMap2LineTo = {
                京津冀: {
                    黑龙江: [127.9688, 45.368],
                    吉林: [125.8154, 44.2584],
                    辽宁: [123.1238, 42.1216],
                    山西: [112.3352, 37.9413],
                },
                长三角: {
                    山东: [117.1582, 36.8701],
                    福建: [119.4543, 25.9222],
                    江西: [116.0046, 28.6633],
                    河南: [113.4668, 34.6234],
                },
                粤港澳: {
                    湖南: [113.0823, 28.2568],
                    云南: [102.9199, 25.4663],
                    广西: [108.479, 23.1152],
                    湖北: [114.3896, 30.6628],
                },
                陕川渝: {
                    甘肃: [103.5901, 37.3043],
                    青海: [95.4038, 36.8207],
                    西藏: [91.141017, 29.668461],
                    新疆: [87.9236, 43.5883]
                },
            }
            let geoCoordMap4 = {
                // 美洲区: [73.5551, 48.8539],
                美洲区1: [75.5551, 48.8539],
                美洲区2: [73.5551, 49.8539],
                美洲区3: [71.5551, 45.8539]
            }
            let geoCoordMap5 = {
                // 欧洲区: [104.9551, 49.7539],
                欧洲区1: [102.9551, 50.5539],
                欧洲区2: [104.9551, 49.7539],
                欧洲区3: [106.9551, 49.3539]
            }
            let geoCoordMap6 = {
                // 亚太区: [146.4551, 48.7539],
                亚太区1: [144.4551, 45.7539],
                亚太区2: [145.4551, 49.7539],
                亚太区3: [147.4551, 48.7539]
            }
            let mapSpotData = [
                {
                icon_name: "算力集群",
                icon_type: "image://data:image/png;base64,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 6kgFLSlDZ1AIyuK5ilbgSNgGO+zo5dMrS/X3nAr5plXS+fgJnz/3G3pSMJg+8ydmT/sihWGleVs0 3UHhOQm6D1bQPG4Dx4MJhuhcOmOh2DdU2IB5FsfDSbf7mxgyN4ANKTjFiZyNETgc4b49leoXQZ8z rVOJ/onBhCDhrFkbF7TrU5HmpAfPVjJEKZ3pj5Kyq88JwLD68p4qns22f6cLZwUKqGYNwxDxhGpj yQ1a1+n2LvZ7/du0kYqzCbC1VN10LEpbNn0KFFCdqC8eJ6c9hwWum32SZaKUpTBlqQo6rUOecU27 +YCOmesFcc80QBx5Zmed/Mts/UhavNw4x/67iq7TlQmUVHIUsybQT4EIyjNUCJR4AUdzOEYZnd6t KmUvPVMAEXm7uVLu6olkbNjplG1SKesTqgLqtl5qcKiey7Q2PmGtqE5Z8oLWDfd6K90+e5s2lM8H oIh9+Xil/spM8KY6iVm5BD1k/vEmIirKAi80h20dgKUAQ1VagjmpkGdct9tudEbMZseqwiAArZI9 8Rz1P02VvHi69n2wqTStj5XSSoAlzZx/J3LbAMURS0M2u5epUqDSPmVKKAs6rZXBye03yyIxe6nj sUgZW+1YCU8CqKVXhING81Ysjxc6SvTbM7WZTjMYHqLpJwuD/wpqXj+0EVBbeqjOd6g+3f55Jlkh lDZUiZ17yGo+O4mkxStUtPwwn+4g9c4YwDHdfZjwUCENJhx8WweQsuQ7hipfgjkpRxhG0SY22Ikq yN5JzKYzAnBMY0FY1w8Fj9aA8n1KjFBuZolTCniO0IZkZ+gnKqiTOKcAx9q8vZsq7VJjJVi0BjLT 2hoqfTv92lNDj6PoNAGDrHN1EucDIADLIfSeTuoTEUrnUt9aotpQlZSMkwoUbpqi+TiJ2XTWAI7p E93kJ3NSC7Ufygla14Lgj76A8+QkZtNZBzh2n1s7qQiFqZvLtJ6LzpSTmPXBzhFAAD4Fbt8AdTkS 7CREEJ1pJzGbzinAMd3SRTQ3J7XAmlDgbd3pdLacxGw6LwDH9OkOKvoi1IWzOFIyk86mk5hN5xUg wFUQ+HTYmM6Fk5hN5x3gmIKmFM6Vk5hN7xiAY5otpXCuncRsescBhOlTCufLScymdyTAMY2lFADO l5OYTf8HD1F6JLfULmcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMtMzBUMTc6MzU6MDUrMDg6 MDDaOz98AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTMwVDE3OjM1OjA1KzA4OjAwq2aHwAAA ACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6 RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA1OJ57tmwA AAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAODDdoYCeAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUA aW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2NDg2MzI5MDXx4aG4AAAAEnRFWHRU aHVtYjo6U2l6ZQA0NjYzQkIpikzbAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9p bWFnZWxjL2ltZ3ZpZXcyXzlfMTY0Nzg0ODMyNDQ2NDgxNDRfNjlfWzBdyqGQawAAAABJRU5ErkJg gg==",
                initMapIcon: JSON.parse(JSON.stringify(geoCoordMap1)),
                },
                {
                icon_name: "核心枢纽",
                icon_type: "image://data:image/png;base64,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 e3ZS78HVtXMpeEppLEPztmLF6ZjGRshTiqAC22Hhrdz5f5UFWOr8/wXJk2elyfqaihpDi1SXZdoX p/cfzifDL1DrSkeeT/fiT+dTb1msPYJ6sWo0BZ5HWVZYMjwcShCNxJzdkYzsCipRlxDo+SqsJ6yb /L8kTy04qlgekhxiO1PeHtFe7RyBQZHcRAhrJ9Cnhsyo+l9qm2//pe+X1jgFijPfzWdsuTGu6TuR u2IUoqm7dFmviURQuJS6QrGzjJqLEkSrE3p3SZZdj+6fHkxrSQeu9f/QaLFXzFm2PCQz5m3XMXeP rXXtOgl0jYj5E9/OwPd0cLGykprR0QLOPgUrHmLX/KGNgLprgkpMKgzWnYODFmw8KpzziZlLoWKW aKwz3TCz1feiqLWHaCwQxt3tgZi3J19L7WoEmgF1yLfZ/orRavdc2tack7j0xHHFBM7hT07ji0Wo wyayXhIBMpp826NiuWV9JbBAgmNOc0mCDwZRGy4l0LSYNKvtb/pvzntYrIUTNO8kihlgHfG1y/7Y 8H1TRIqgzlGs/XLkPBSorEuJEkqcy1DzUjA0KVcYsBRJDVIzzE1lKf1Zf1a3/PrRmLYi5q/ybg58 26wyFyWNr+QkXjcC5+p/ZowKLCqddW5LILessx7lolnXvcTFUOAZihENE3KJcjRI2wC3HOyaHQm+ NW9RkvhanMTrTSCQW9aTBdQoH0WXUz+jyfd7lKVlfWrWQtxQDBqa7HrqwdqdxGp4TQicw52TFNh2 ptZw7cB662oQXIo9odRbORkAS5PNKAZtWd83crB+J/GGEjjX5sfHKDcsKrVgrLeyK1japUxDwVLP DRg3FSMerOu8drlO4s0gEIB7wWKE2pSfVb/2XAqOR1Bpyl3BDwudxHrbuhInsRpeNwLn8Jkx8mf8 mTqfZ+ett+7cshYDvZSTWA2vhZNYDa87gXP9fHSEqO2j+nKW9eXgtXISqw7sDSIQyC3ryRjVAeHy Mx9XwWvtJFbDG0rgHO4cJZQXyNRpzw5eeWs5vF5OYjW8KQTO4e4hSmcD1PiENXxFvDxeTyexGt5U AgFuAbN8impbEV1v3TfCSayGN53AOewZJC+cT73hsaYP8d4oJ7Ea/mAInMO9cUpSLjWopaM1b7ST WA1/cARC7kph3yRVnkHZXOzxzXISq+EPksA5/MdzBIYC1AG8WU5iNfx/28GrevTZt+oAAAAldEVY dGRhdGU6Y3JlYXRlADIwMjItMDMtMzBUMTc6MzM6NTcrMDg6MDAIWlB2AAAAJXRFWHRkYXRlOm1v ZGlmeQAyMDIyLTAzLTMwVDE3OjMzOjU3KzA4OjAweQfoygAAACB0RVh0c29mdHdhcmUAaHR0cHM6 Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7sv AAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA2MlWDDLEAAAAWdEVYdFRodW1iOjpJbWFnZTo6 V2lkdGgAODDdoYCeAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0 VGh1bWI6Ok1UaW1lADE2NDg2MzI4Mzc1APlgAAAAEnRFWHRUaHVtYjo6U2l6ZQA2MzU0QkK7WNvL AAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTY0 ODYwODAwNDQyODA1NDBfNzJfWzBd7EOtQQAAAABJRU5ErkJggg==",
                initMapIcon: JSON.parse(JSON.stringify(geoCoordMap2)),
                },
                {
                icon_name: "核心机楼",
                icon_type: "image://data:image/png;base64,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 czie9FaVlsQ25iw7E3Zr0Lvlh5+a0FpgtcaWwCxW/Hf3NC+TWKwxr6zgzBqVTK7gnoqk3Bw3xM5O IJl4qf/z8kmxZ62xg/ZsGYgkYueqZewZ7nQdUwKhTz9+9QXm4XOhGgo+tRz33OxZFfLHZTG9IheB sYR5feI0/6deaaIlV/4wDI60nfC3/eKO/CKO5x2BWTxaR+xYKYsyljnF6MfpZW5xValZnrDUrH7h OF5MDpZPif1jeVXJ5lzpI+hJR91bfrasrKVAUecngVmsrKfcReHFxLzJheb1BHNBJbf8amNX2cR5 Jc/4drBFEQrOBTTM2kBDMYcli8GYEpjF/WuZ4TwW22J+kGcIRJmg2eFvHc5x3WIwLgQCPPoopvlD 1AALRYZxX6U/ZvujWzlSdBnDwLgRmMWt9cSrNajN52zO6QgUJWD3ql52DRWzHQuMO4FZPPRce2UY L7v4bKfDsnBRcEyS/tYfLR3/n4M6bwjMYsWLzBKf2iGig2lJsS0bjzgfcN4RCIOD+0PFI84HnJcE ZnFnHclp5dQYx4HHl9E53vXJhf8FJFEmEdibjbgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMt MzBUMTc6MzE6NDkrMDg6MDCQOvuIAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTMwVDE3OjMx OjQ5KzA4OjAw4WdDNAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2d AAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6 OkhlaWdodAA3MKKWXNwAAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAODDdoYCeAAAAGXRFWHRU aHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2NDg2MzI3 MDnyycCZAAAAEnRFWHRUaHVtYjo6U2l6ZQA0MDk1QkL6JNWfAAAARnRFWHRUaHVtYjo6VVJJAGZp bGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTY0ODYwMDkyODg4NzU2ODBfNDFfWzBd h6+PRgAAAABJRU5ErkJggg==",
                initMapIcon: JSON.parse(JSON.stringify(geoCoordMap3)),
                },
                {
                icon_name: "美洲区",
                icon_type: "pin",
                initMapIcon: JSON.parse(JSON.stringify(geoCoordMap4)),
                },
                {
                icon_name: "欧洲区",
                icon_type: "pin",
                initMapIcon: JSON.parse(JSON.stringify(geoCoordMap5)),
                },
                {
                icon_name: "亚太区",
                icon_type: "pin",
                initMapIcon: JSON.parse(JSON.stringify(geoCoordMap6)),
                }
            ]
            let mapShowData = [
                {name:"京津冀",value:25},
                {name:"长三角",value:25},
                {name:"粤港澳",value:25},
                {name:"陕川渝",value:25},
                {name:"内蒙古",value:15},
                {name:"贵州",value:15},
                {name:"江苏",value:5},
                {name:"黑龙江",value:5},
                {name:"吉林",value:5},
                {name:"北京",value:5},
                {name:"辽宁",value:5},
                {name:"河北",value:5},
                {name:"天津",value:5},
                {name:"山西",value:5},
                {name:"陕西",value:5},
                {name:"甘肃",value:5},
                {name:"宁夏",value:5},
                {name:"青海",value:5},
                {name:"新疆",value:5},
                {name:"四川",value:5},
                {name:"重庆",value:5},
                {name:"山东",value:5},
                {name:"河南",value:5},
                {name:"安徽",value:5},
                {name:"湖北",value:5},
                {name:"浙江",value:5},
                {name:"福建",value:5},
                {name:"江西",value:5},
                {name:"湖南",value:5},
                {name:"云南",value:5},
                {name:"广东",value:5},
                {name:"广西",value:5},
                {name:"海南",value:5},
                {name:"上海",value:5},
                {name:"西藏",value:5},
            ]
            var data = [{
                name: '浙江省',
                value: 321
            },  {
                name: '北京市',
                value: 991
            }, {
                name: '重庆市',
                value: 312
            }, {
                name: '广东省',
                value: 321
            }, {
                name: '内蒙古',
                value: 3211
            }, {
                name: '贵州',
                value: 3211
            }, {
                name: '甘肃',
                value: 3211
            }, {
                name: '宁夏',
                value: 3211
            }];
            var mapData = [];
            for (var key in geoCoordMap) {
                const keys = key;
                const filters = data.filter(item => {
                    return item.name.includes(keys);
                })[0];

                mapData.push({
                    name: key,
                    value: filters ? filters.value : 0
                });
            }
            mapData.sort((a, b) => {
                return a.value - b.value;
            });

            var convertData = function(data, geoMap) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            var convertToLineData = function(data, gps, geoMap) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var toCoord = geoMap[dataItem.name];
                    var fromCoord = gps; // gps：‘中心点’
                    if (fromCoord && toCoord) {
                        res.push({
                            fromName: gps,
                            toName: dataItem.name,
                            coords: [
                                fromCoord,
                                toCoord
                            ]
                        });
                    }
                }
                return res;
            };

            // 获取 series 对象内容
            var getSeriesList = function() {
                let seriesList = [];
                for (const iterator of mapSpotData) {
                    // 地图点
                    seriesList.push(
                        {
                            name: iterator.icon_name,
                            type: 'effectScatter',
                            zlevel: 4,
                            coordinateSystem: 'geo',
                            data: convertData(mapData,iterator.initMapIcon).map(item => {
                                return {
                                    name: item.name,
                                    value: item.value.splice(0, 2)
                                };
                            }),
                            symbol: iterator.icon_type,
                            symbolSize: 25,
                            hoverAnimation: false,
                            showEffectOn: 'emphasis',
                            rippleEffect: {
                                scale: 1,
                                brushType: 'stroke',
                            },
                            itemStyle: {
                                normal: {
                                    color: "#38ee5a",
                                }
                            }
                        }
                    );
                }

                // 线
                let newObj = {}
                for(const key in geoCoordMap1) {
                if(!newObj[key]) {
                    newObj[key] = geoCoordMap1[key];
                }
                }
                for(const key1 in geoCoordMap2) {
                if(!newObj[key1]) {
                    newObj[key1] = geoCoordMap2[key1];
                }
                }
                for(const item in newObj){
                seriesList.push(
                    {
                    name: '',
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        // symbol: planePath,
                        trailLength: 0,
                        symbolSize: 4
                    },
                    lineStyle: {
                        normal: {
                            type: 'solid',
                            color: 'rgb(221,154,43)',
                            width: 3,
                            opacity: 0.7,
                            curveness: 0.1
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    data: convertToLineData(mapData, newObj[item], newObj)
                    }
                );
                }
                for(const item in geoCoordMap2){
                seriesList.push(
                    {
                    name: '',
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        // symbol: planePath,
                        trailLength: 0,
                        symbolSize: 4
                    },
                    lineStyle: {
                        normal: {
                            type: 'solid',
                            color: 'rgb(118,246,120)',
                            width: 1,
                            opacity: 1,
                            curveness: 0.1
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    data: convertToLineData(mapData, geoCoordMap2[item], geoCoordMap2LineTo[item])
                    }
                );
                }

                seriesList.push(
                {
                    name: '',
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        // symbol: planePath,
                        trailLength: 0,
                        symbolSize: 4
                    },
                    lineStyle: {
                        normal: {
                            type: 'dotted',
                            color: 'rgb(81,177,248)',
                            width: 1,
                            opacity: 1,
                            curveness: 0.1
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    data: convertToLineData(mapData, [112.3467, 41.4899], geoCoordMap5)
                }
                );
                seriesList.push(
                {
                    name: '',
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        // symbol: planePath,
                        trailLength: 0,
                        symbolSize: 4
                    },
                    lineStyle: {
                        normal: {
                            type: 'dotted',
                            color: 'rgb(169,52,248)',
                            width: 1,
                            opacity: 1,
                            curveness: 0.1
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    data: convertToLineData(mapData, [118.8062, 31.9208], geoCoordMap6)
                }
                );
                seriesList.push(
                {
                    name: '',
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        // symbol: planePath,
                        trailLength: 0,
                        symbolSize: 4
                    },
                    lineStyle: {
                        normal: {
                            type: 'dotted',
                            color: 'rgb(217,41,105)',
                            width: 1,
                            opacity: 1,
                            curveness: 0.1
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    data: convertToLineData(mapData, [103.9526, 30.7617], geoCoordMap4)
                }
                );

                // 地图
                seriesList.push(
                {
                    type: 'map',
                    mapType: 'chinaMap',
                    y: "center",
                    x: "center",
                    aspectScale: 0.85, // 长宽比
                    label: { // 地图上的文字
                    normal: {
                        show: true,
                        textStyle: {
                        color: '#1DE9B6'
                        },
                        formatter:function(param){
                        return (['香港','澳门'].indexOf(param.name)>-1)?'':param.name
                        }
                    }
                    },
                    itemStyle: {
                    normal:{
                        areaColor: "#173477",
                        borderColor: '#15F1FF'
                    },
                    emphasis: { // 高亮时区域颜色
                        areaColor: "#173477"
                    }
                    },
                    data: mapShowData
                }
                );
                return seriesList;
            }

            let numArr = [
                {start: 1, end: 10,color: "#173477"},
                {
                    start: 11, end: 20,
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "rgb(70 16 106 / 90%)" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "rgb(147 88 47 / 90%)" // 100% 处的颜色
                        }],
                    }
                },
                {start: 21, end: 30,
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "rgb(96 60 167 / 90%)" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "rgb(63 227 179 / 90%)" // 100% 处的颜色
                        }],
                    }
                },
                {start: 31,
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "rgb(105 222 49 / 90%)" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "rgb(169 147 17 / 90%)" // 100% 处的颜色
                        }],
                    }
                }
            ]

            let option = {
                backgroundColor: 'rgba(0,0,0,0)',
                series: getSeriesList(),

                // 点&投影
                geo: {
                    map: 'chinaMap',
                    y: "center",
                    x: "center",
                    aspectScale: 0.85, // 长宽比
                    roam: false,
                    itemStyle: {
                        normal: {
                            shadowColor: 'rgb(58,115,192)',
                            shadowOffsetX: 4,
                            shadowOffsetY: 4,
                            shadowBlur: 4
                        }
                    },
                    regions: [
                        {
                            name: '南海诸岛',
                            itemStyle: {
                                normal: {
                                    opacity: 0,
                                    label: {
                                        show: false
                                    }
                                }
                            }
                        },
                        {
                            name: '香港',
                            itemStyle: {
                                normal: {
                                    opacity: 0,
                                    label: {
                                        show: false
                                    }
                                }
                            }
                        },
                        {
                            name: '澳门',
                            itemStyle: {
                                normal: {
                                    opacity: 0,
                                    label: {
                                        show: false
                                    }
                                }
                            }
                        }
                    ]
                },
                dataRange: {
                    show:false,
                    x: 'left',
                    y: 'bottom',
                    splitList: numArr,
                    textStyle:{
                        color:'#333333'
                    },
                },
                // 提示
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0)',
                    padding: 0,
                    show: false
                    // formatter: function(params) {
                    //     let res = ''
                    //     let areaList = ['京津冀', '长三角', '陕川渝', '粤港澳', "内蒙古", "贵州"]
                    //     let name1 = "数据中心";
                    //     let name2 = "专业机房";
                    //     let name3 = "总机架";
                    //     let value1 = "";
                    //     let value2 = "";
                    //     let value3 = "";
                    //     if (params.componentSubType == 'effectScatter' && areaList.indexOf(params.name) > -1) {
                    //         let idcName = ''
                    //         if (params.name == '内蒙古') {
                    //             idcName = '内蒙古信息园'
                    //             name1 = "总建筑面积";
                    //             name2 = "设计机楼";
                    //             name3 = "机架";
                    //             value1 = "100.6万㎡";
                    //             value2 = "42栋";
                    //             value3 = "10万+";
                    //         } else if (params.name == '贵州') {
                    //             idcName = '中国电信云计算贵州信息园'
                    //             name1 = "建筑面积";
                    //             name2 = "机架数量";
                    //             name3 = "出口带宽";
                    //             value1 = "39万㎡";
                    //             value2 = "6万+";
                    //             value3 = "5000G";
                    //         } else if (params.name == '京津冀') {
                    //             idcName = '京津冀枢纽'
                    //             value1 = "15个";
                    //             value2 = "30个";
                    //             value3 = "7.8万";
                    //         } else if (params.name == '长三角') {
                    //             idcName = '长三角枢纽'
                    //             value1 = "39个";
                    //             value2 = "113个";
                    //             value3 = "15.38万";
                    //         } else if (params.name == '陕川渝') {
                    //             idcName = '陕川渝枢纽'
                    //             value1 = "24个";
                    //             value2 = "16个";
                    //             value3 = "3.16万";
                    //         } else if (params.name == '粤港澳') {
                    //             idcName = '粤港澳枢纽'
                    //             value1 = "22个";
                    //             value2 = "64个";
                    //             value3 = "9.34万";
                    //         }

                    //         res = `<div style="position: relative;z-index:10000;background-image: url(${require('../../assets/idcImage/mapToolTipbg.png')});width:auto;height:auto;background-size: cover; background-size: 100% 100%; padding:10px 20px;font-size:16px; ">
                    //             <div style="text-align:center;font-weight:bold;"><span>IDC中心概况</span></div>
                    //             <div style="text-align:center;font-weight:bold;"><span>${idcName}</span></div>
                    //             <div style="padding:30px 20px;">` + 

                    //                 (activityItem==''?`<div style="line-height:40px;margin-top:10px;display:inline-block;width:160px;">
                    //                 <div style="">
                    //                     <div style="display:inline-block;margin-left:20px;">
                    //                     <div style="line-height:30px;color:#73F3FD;font-size:18px;">
                    //                         <span>${value1}</span>
                    //                     </div>
                    //                     <div style="line-height:20px;color:#fff;font-size:14px;">
                    //                         <span>${name1}</span>
                    //                     </div>
                    //                     </div>
                    //                 </div>
                    //                 <div style="">
                    //                     <div style="display:inline-block;margin-left:20px;">
                    //                     <div style="line-height:30px;color:#F6C835;font-size:18px;">
                    //                         <span>${value2}</span>
                    //                     </div>
                    //                     <div style="line-height:20px;color:#fff;font-size:14px;">
                    //                         <span>${name2}</span>
                    //                     </div>
                    //                     </div>
                    //                 </div>
                    //                 <div style="">
                    //                     <div style="display:inline-block;margin-left:20px;">
                    //                     <div style="line-height:30px;color:#51B0FC;font-size:18px;">
                    //                         <span>${value3}</span>
                    //                     </div>
                    //                     <div style="line-height:20px;color:#fff;font-size:14px;">
                    //                     <span>${name3}</span>
                    //                     </div>
                    //                     </div>
                    //                 </div>
                    //                 </div>`:``) + 

                    //                 `<div style="display:inline-block;width:430px;heigth:230px;margin-top:10px;">
                    //                 <img style="width:100%;heigth:100%;" src=${require('../../assets/idcImage/' + (activityItem === '2' || activityItem === '4' ? 'cluster' : 'buildImgs') +'/' +
                    //                     params.name +
                    //                     '.jpg')} />
                    //                 </div>
                    //             </div>
                    //             </div>`
                    //     }
                    //     return res
                    // }
                }
            };
            this.mapChart.setOption(option);
        }
    },
    mounted(){
        this.initMap();
    }
};
</script>
<style lang="scss" scoped>
.echartMap-container {
  min-height: 670px;
  #mapContainer {
    height: 670px;
    background:rgb(6, 17, 56);
  }
}
</style>