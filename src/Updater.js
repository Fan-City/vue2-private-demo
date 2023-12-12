export default class Update {
    constructor(val) {
        this.lastSrcs = '';
        this.scriptReg = /\<script.*src=["'](?<src>[^"']+)/gm;
        this.timeData = 2000;
    };

    async getScripts() {
        const html = await fetch('/?timestep=' + Date.now()).then((res) => res.text());
        this.scriptReg.lastIndex = 0;// 正则分析页面所有url地址
        const result = [];
        let match;
        while ((match = this.scriptReg.exec(html))) {
            result.push(match[1]);
        }
        return result;
    }

    async needUpdate() {
        const newScripts = await this.getScripts();//调用newScripts
        if (!this.lastSrcs) {//如果之前没有保存页面js地址的话，进行一次保存，初始化并存下当前数据
            this.lastSrcs = newScripts;
            return false;
        }
        let result = false;
        if (this.lastSrcs.length !== newScripts.length) {
            result = true;
        }
        for (let i = 0; i < this.lastSrcs.length; i++) {
            if (this.lastSrcs[i] !== newScripts[i]) {
                result = true;
                break;
            }
        }
        this.lastSrcs = newScripts;
        return result;
    }

    autRef() {
        setTimeout(async () => {
            const willUp = await this.needUpdate();//调用检查更新函数
            if (willUp) {
                const result = confirm('数据更新点击确认刷新当前页')
                if (result) {
                    location.reload();//刷新当前页
                }
            };
            this.autRef();
        }, this.timeData)
    }
}