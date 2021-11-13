// REference: https://community.k6.io/t/how-do-i-parameterize-my-k6-test/26

import http from "k6/http"
import { sleep } from "k6"

export function setup() {
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

var baseURL = "http://google.com"

export default function (data) {
    var customer_name = data[__VU]["customer_name"]
    var customer_details = data[__VU]["customer_data"]
    // console.log("*********" + customer_name + "*********")
    display_cust_details(customer_name, customer_details)

    // if (__VU == 2) {
    //     http.get("https://test.loadimpact.com/special/url/for/vu2")
    // }
}

export function display_cust_details(customer_data, customer_name) {
    console.log("*********" + customer_name + "*********" + customer_data)
}