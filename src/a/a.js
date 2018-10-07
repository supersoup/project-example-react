/**
 * Created by supersoup on 18/10/2.
 */
export default function(text) {
    console.log(text);
    import('../b/b').then(function (fnB) {
        console.log(fnB);
        fnB.default();
    })
}