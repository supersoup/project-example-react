/**
 * Created by supersoup on 18/10/2.
 */
import utilFn from '../util/util1'
import _ from 'lodash';
import c from '../c/c'
import './a.css'

export default function(text) {
    const moduleName = 'b';
    var pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(1)
        }, 1000)
    });
    
    pro.then(function () {
        utilFn();
        c();
    });
    
    console.log(_);
    console.log(text);
    import('../b/' + moduleName).then(function (fnB) {
        console.log(fnB);
        fnB.default();
    })
}