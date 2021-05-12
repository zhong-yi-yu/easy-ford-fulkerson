// import Euclid_gcd from "./ExtendedEuclidAlgorithm"
/**
 * 使用RSA算法，注入P，Q，E的值，输出加密后的消息
 * @param p 用于生成密钥的大数之一
 * @param q 用于生成密钥的大数之二
 * @param e 事先选中的E，用于计算D的值
 * @param m 需要加密的数字化明文
 */
function RSA_CIPHER(p, q, e, m) {
    var n = p * q;
    // 本质是φ(n)
    var O_n = (p - 1) * (q - 1);
    var d_collection = [];
    console.log("φ(n) is " + O_n);
    console.log("M is " + m);
    for (var i = 0; i < O_n; i++) {
        if ((i * e) % O_n == 1) {
            d_collection.push(i);
        }
    }
    var max_d = Math.max.apply(Math, d_collection);
    console.log(d_collection);
    console.log(max_d);
    var bb = BigInt(Math.pow(m, e));
    console.log(bb);
    var crypt = bb % BigInt(n);
    console.log("THE CRYPT IS " + crypt);
}
RSA_CIPHER(5, 17, 13, 37);
/**
 * 使用RSA算法，注入P，Q，E的值，输出解密后的消息
 * @param p 用于生成密钥的大数之一
 * @param q 用于生成密钥的大数之二
 * @param e 事先选中的E，用于计算D的值
 * @param c 需要解密的值
 */
function RSA_DECODE(p, q, e, c) {
    var n = p * q;
    var O_n = (p - 1) * (q - 1);
    var d_collection = [];
    console.log("φ(n) is " + O_n);
    for (var i = 0; i < O_n; i++) {
        if ((i * e) % O_n == 1) {
            d_collection.push(i);
        }
    }
    var max_d = Math.max.apply(Math, d_collection);
    console.log("E is " + e + " D is " + max_d);
    var m = (Math.pow(c, max_d)) % n;
    console.log("DECODE VAULE IS " + m);
}
// RSA_DECODE(5,17,13,12);
