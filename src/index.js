module.exports = function getZerosCount(number, base) {
    var i, j, count = 0, copy, nod;
    var array = [];
    for (i = 2; i <= base; i++) {
        array[i] = 1;
    }
    for (i = 2; i * i <= base; i++) {
        if (array [i] == 1) {
            for (j = i * i; j <= base; j = j + i) {
                array [j] = 0;
            }
        }
    }
    for (i = base; i > 1; i--) {
        if ((array [i] === 1) && (base % i === 0)) {
            nod = i;
            i = 0;
        }
    }
    j = 0;
    copy = base;
    while (copy % nod === 0) {
        j++;
        copy = copy / nod;
    }
    for (i = nod; i <= number; i = i + nod) {
        copy = i;
        while (copy % nod === 0) {
            count++;
            copy = copy / nod;
        }
    }
    return Math.floor(count / j);
}