import http from "k6/http";
import { group, sleep, check } from "k6";
//import url from "../core/url.js";
import string_format from "../core/string_format.js"

const url = JSON.parse(open("../core/urls.json"));
export function loginas(username=__ENV.username, password=__ENV.password){
    string_format()
    var login_url = url['login'].format({env:__ENV.MY_HOSTNAME}) 
    let res = http.post(login_url, { login: username, password: password })

    check(res, {
        "is status 200": (res) => res.status === 200,
        "to_explain": validate_resp
      });

};


function validate_resp(resp) {
    if (resp.status == 200) {
        return true
    }
}