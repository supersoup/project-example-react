/**
 * Created by supersoup on 18/10/2.
 */
import utilFn from '../util/util1'
import _ from 'lodash';
import c from '../c/c'

export default function(text) {
    const moduleName = 'b';
    utilFn();
    c();
    console.log(_);
    console.log(text);
    import('../b/' + moduleName).then(function (fnB) {
        console.log(fnB);
        fnB.default();
    })
}