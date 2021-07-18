const cl = console.log

const arr = [-6, -91, 1011, -100, 84, -22, 0, 1, 473]

function solution(A) {
    let maxNum = 0

    for (let i = 0; i < A.length; i++) {
        const int = A[i]

        if (int % 4 == 0 && int > maxNum) {
            maxNum = int
        }
    }

    return maxNum
}

cl(solution(arr))