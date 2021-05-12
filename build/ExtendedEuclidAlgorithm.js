// 使用Extended Eudlid Algorithm计算最大公倍数
function Euclid_gcd(a, b) {
    var ori_a = a;
    var ori_b = b;
    a = +a;
    b = +b;
    if (a !== a || b !== b) {
        return [NaN, NaN, NaN];
    }
    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
        return [Infinity, Infinity, Infinity];
    }
    // Checks if a or b are decimals
    if ((a % 1 !== 0) || (b % 1 !== 0)) {
        return false;
    }
    var signX = (a < 0) ? -1 : 1, signY = (b < 0) ? -1 : 1, x = 0, y = 1, u = 1, v = 0, q, r, m, n;
    a = Math.abs(a);
    b = Math.abs(b);
    while (a !== 0) {
        q = Math.floor(b / a);
        r = b % a;
        m = x - u * q;
        n = y - v * q;
        b = a;
        a = r;
        x = u;
        y = v;
        u = m;
        v = n;
    }
    console.log(signX * x + " is the integer for " + ori_a);
    console.log(signY * y + " is the integer for " + ori_b);
    console.log("最大公约数是 " + b);
    return [b, signX * x, signY * y];
}
// 调用函数
// console.log(Euclid_gcd(100,10));
Euclid_gcd(90, 56);
Euclid_gcd(91, 89);
Euclid_gcd(711, 75);
Euclid_gcd(815, 75);
Euclid_gcd(112, 196);
Euclid_gcd(366, 150);
