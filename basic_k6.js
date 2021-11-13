// To run this script use the command - docker run -i loadimpact/k6 run - < basic_k6.js

import http from "k6/http";
import { sleep } from "k6";


export default function () {
    http.get("http://test.loadimpact.com");
    sleep(10);
};