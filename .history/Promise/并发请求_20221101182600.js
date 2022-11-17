/**
 * 并发请求
 * @param {string[]} urls 待请求的url数据
 * @param {number} maxNum 最大并发数
 */

function concurRequest(urls, maxNum) {
    return new Promise(resolve => {
        if (urls.length === 0) {
            resolve([]);
            return;
        }
        const result = [];
        let index = 0; // 下一个请求下标
        let count = 0; // 请求完成数量

        async function request() {
            if (index === urls.length) {
                return;
            }
            const i = index
            const url = urls[index];
            index++;
            try {
                const resp = await fetch(url);
                //resp加入到result
                result[i] = resp
            } catch (error) {
                //error加入到result
                result[i] = error
            } finally {
                count++
                // 判断是否所有请求都已完成
                if (count === urls.length) {
                    console.log('over');
                    resolve(results)
                }
                request()
            }
        }

        const times = Math.min(maxNum,urls.length)

        for (let i = 0; i < times; i++) {
            re
            
        }



    })
}