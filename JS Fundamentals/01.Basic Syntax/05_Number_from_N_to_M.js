function NumbersFromNtoM(N, M){
    if (N > M){
        while(N >= M){
            console.log(N)
            N--
        }
    }
    else if (N < M){
        while(N <= M){
            console.log(N)
            N++
        }
    }
}

NumbersFromNtoM(1, 10)
NumbersFromNtoM(10, 1)
NumbersFromNtoM(-10, 9)