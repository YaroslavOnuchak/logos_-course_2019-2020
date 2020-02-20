let fibonList = n => {
    let fib = [0, 1];
    for (i = 2; i < n; i++) {

        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return console.log(fib.slice(0, n).join(' '));

}

fibonList(22);


// https://ru.stackoverflow.com/questions/450971/javascript-%d0%92%d1%8b%d0%b2%d0%b5%d1%81%d1%82%d0%b8-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2-%d1%87%d0%b8%d1%81%d0%b5%d0%bb-%d0%a4%d0%b8%d0%b1%d0%be%d0%bd%d0%b0%d1%87%d1%87%d0%b8-%d0%bd%d0%b0-%d1%8d%d0%ba%d1%80%d0%b0%d0%bd?answertab=votes