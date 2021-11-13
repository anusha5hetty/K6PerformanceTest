import { Trend } from "k6/metrics";
import { check, fail } from "k6";
import http from "k6/http";


export let options = {
    summaryTimeUnit: 's',
    summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(95)', 'p(99)', 'p(99.99)', 'count'],
};

// the second parameter is isTime - only if it value is true - the values entered are considered as time
var myTrend = new Trend("my_trend", true);



function fnTrends() {
    // to get avg, min, max etc
    // my_trend.............: avg=1.5      min=1        med=1.5      max=2        p(90)=1.9      p(95)=1.95
    myTrend.add(1);
    myTrend.add(2);
}


export default function () {
    http.get("http://test.loadimpact.com");
    fnTrends()
};

export function teardown() {
    return 0
}