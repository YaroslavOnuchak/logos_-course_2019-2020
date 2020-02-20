let start, end;

function listPrim() {
    start = +prompt('\nenter first Number \nFrom: \n(for corect list min numbr 3)');
    end = +prompt('To');
    if (end > start) {
        for (let j = start; j <= end; j++) {
            let count = 0;


            for (let i = 1; i < j; i++) {
                let result = j % i;
                if (result == 0) {
                    count++;
                }
            }
            if (count == 1) {
                console.log(j)
            }
        }
    } else if (end < start) {
        for (let j = end; j <= start; j++) {
            let count = 0;

            for (let i = 1; i < j; i++) {
                let result = j % i;
                if (result == 0) {
                    count++;
                }
            }
            if (count == 1) {
                console.log(j)
            }
        }
    }



}

listPrim();
