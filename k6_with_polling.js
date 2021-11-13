// import http from "k6/http";
// import { sleep } from "k6";


const poll_without_async = ({ fn, validate, interval, maxAttempts }) => {
    let attempts = 0;
    const executePoll = () => {
        const result = fn();

        attempts++;

        if (validate && validate(result)) {
            return result;
        } else if (result) {
            return result
        } else if (attempts === maxAttempts) {
            throw 'Exceeded max attempts';
        } else {
            console.log('*****setTimeout********')
            setTimeout(executePoll, interval);
        }
    };
    executePoll()
}


function func1() {
    console.log('*****8123********')
    return false
}

function validate(result) {
    return result === 2
}


export default function () {
    const destructuring_dct = {
        fn: func1,
        validate: validate,
        interval: 4,
        maxAttempts: 5
    }

    poll_without_async(destructuring_dct)
};

// const destructuring_dct = {
//     fn: func1,
//     validate: validate,
//     interval: 4,
//     maxAttempts: 5
// }

// poll_without_async(destructuring_dct)
