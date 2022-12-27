const express = require('express');
const app = express();
const port = 8080;
let quadraticEquation = (a, b, c) => {
    if(a == 0)
        return false;
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return false;
    res['discriminant'] = D;
    if(D == 0)
        res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["quadratic roots"] = tmp;
    }
    return res;
}
app.get("/", (req, res) => {
    console.log(quadraticEquation(5,6,4));
    a = quadraticEquation(5,6,4)
    res.send({a})
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})