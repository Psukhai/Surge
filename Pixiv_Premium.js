let body = JSON.parse($response.body)
body['response']['user']['is_premium']['x_restrict'] = true
body = JSON.stringify(body)
$done({body})
