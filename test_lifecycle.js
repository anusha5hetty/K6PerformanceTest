// 1. init code
var data1 = { extra: '123' }


export function setup() {
    // 2. setup code
    return {
        1: {
            "customer_name": 'PPMP-Cust-1',
            "customer_data": 'detailed customer data for PPMP-Cust-1'
        },
        2: {
            "customer_name": 'PPMP-Cust-2',
            "customer_data": 'detailed customer data for PPMP-Cust-2'
        }
    }
}

export default function (data) {
    // data is values returned from setup function
    // 3. vu code
    data1.extra = 'checking'

    console.log('*********************' + data1.extra)
}

export function teardown(data) {
    // 4. teardown code
    console.log('********************* data.extra\n' + data1.extra)
}