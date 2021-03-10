module.exports = function reverse (n) {
    if (n<0) n=-n;
    if (n<10) return n;
    let zifra;
    let newn=0;
    
    while (n>9){
         zifra=n%10;
         n=(n-zifra)/10;
         newn=newn*10+zifra;
    }
    newn=newn*10+n;
    return newn
}
