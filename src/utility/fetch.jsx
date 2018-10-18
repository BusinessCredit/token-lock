const bcac_contract_address = "0xe36df5bb57e80629cfc28a31e5f794071c085eca"
const api_url = "https://api.etherscan.io/api?" +
  "module=account&action=tokentx&sort=desc&apikey=Q8ZFPV5MXG4PFK7EPHRBPJGMXWGH9YRR8I" +
  "&contractaddress=" + bcac_contract_address

// &page=1&offset=100
// contractaddress=0xe36df5bb57e80629cfc28a31e5f794071c085eca&address=0xbd54a30efb06644a8ec71cdd5415e2563d5643f0

export default function fetch_bcac_lock(address, callback) {
  const requestUrl = api_url +
    "&address=" + address +
    "&page=" + 1 +
    "&offset=" + 1000

  fetch(requestUrl).then(
    res => res.json()
  ).then(
    json => {
      //const result = parse_bcac_tx(json, address)
      callback(json.result)
    }
  ).catch(
    error => {
      console.log(error)
      callback([])
    }
  )
}

function parse_bcac_tx(jsonResponse, address) {
  return jsonResponse.result.filter(
    (result) => result.to === address
  )
}

export function fetch_bcac_all(callback) {
  const requestUrl = api_url +
    "&page=" + 1 +
    "&offset=" + 100

  fetch(requestUrl).then(
    res => res.json()
  ).then(
    json => {
      callback(json.result)
    }
  )
}