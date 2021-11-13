// https://k6.io/docs/cloud/analyzing-results/performance-insights/#disabling-specific-performance-insights
// The insights get disabled on cloud, not in the terminal

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  ext: {
    loadimpact: {
      insights: {
        disabled: ['http_req_blocked', 'http_req_sending'],
      },
    },
  },
};


export default function () {
    http.get("http://test.loadimpact.com");
    sleep(10);
};