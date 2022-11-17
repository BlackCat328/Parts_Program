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

        async function request() {
            const i = index
            const url = urls[index];
            index++;
            try {
                const resp = await fetch(url);
                //resp加入到re
                result[i] = resp
            } catch (error) {
                //errorjia
                result[i] = error
            }
        }



    })
}