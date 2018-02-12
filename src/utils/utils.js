// 手动按字段名排序方法
const dateErp = /^(\d{4})-(\d{2})-(\d{2})$/;
export const sortBy = (name, isDes) => {
    return (pre, next) => {
        let preVal, nexVal;
        if (typeof pre === 'object' && typeof next === 'object') {
            preVal = pre[name];
            nexVal = next[name];

            if (preVal == undefined) {
                return Math.random() > 0.5;
            }
            if (isNaN(preVal) || preVal === '') {
                preVal = preVal == '' ? 0 : (dateErp.test(preVal.substring(0,10)) ? new Date(preVal).getTime() : preVal);
                nexVal = nexVal == '' ? 0 : (dateErp.test(nexVal.substring(0,10)) ? new Date(nexVal).getTime() : nexVal);
                return isDes ? ((preVal == nexVal) ? 0 : ((preVal < nexVal) ? 1 : -1)) : ((preVal == nexVal) ? 0 : ((preVal < nexVal) ? -1 : 1)); 
            } else {
                return isDes ? ((preVal == nexVal) ? 0 : ((preVal - nexVal < 0) ? 1 : -1)) : ((preVal == nexVal) ? 0 : ((preVal - nexVal < 0) ? -1 : 1)); 
            }

        }
    }
}