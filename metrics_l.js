import { Trend } from "k6/metrics";
import { Rate } from "k6/metrics";
import { Counter } from "k6/metrics";
import { Gauge } from "k6/metrics";
import { check, fail } from "k6";


var myGauge = new Gauge("my_gauge");
var myRate = new Rate("my_rate");
var myTrend = new Trend("my_trend");
var myCounter = new Counter("my_counter");


function fnTrends() {
    // to get avg, min, max etc
    // my_trend.............: avg=1.5      min=1        med=1.5      max=2        p(90)=1.9      p(95)=1.95
    myTrend.add(1);
    myTrend.add(2);
}

function fnRate() {
    // to get the rate of success. measured by number of non-zero vals
    // my_rate..............: 50.00% ✓ 2   ✗ 2
    myRate.add(true);
    myRate.add(false);
    myRate.add(1);
    myRate.add(0);
}

function fnCounter() {
    // cumulative metric. adds values added to the counter
    // my_counter...........: 3      0 / s
    fail("Logincert not fetched ************");
    myCounter.add(1);
    myCounter.add(2);
}

function fnGauge() {
    // saves the latest value, also gives min and max
    // my_gauge.............: 2      min=1 max=3
    myGauge.add(3); 
    myGauge.add(1);
    myGauge.add(2)
    console.log(myGauge.get())
}


export default function () {
    fnTrends()
    fnRate()
    fnCounter()
    fnGauge()
};

export function teardown() {
    return 0
}