 // https://overcoder.net/q/359837/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%B5-%D1%87%D0%B8%D1%81%D0%BB%D0%B0-javascript

 function declaration(x) {
     let d = x - 1;
     while (d > 1) {
         if ((x % d) == 0) return false;
         d--;
     }
     return true;
 }
 console.log(`${declaration(59)} is prime`);