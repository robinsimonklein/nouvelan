import * as axios from 'axios'

let options = {}

// The server-side needs a full url to works
if (process.env.NODE_ENV === 'production') {
  options.baseURL = `https://${process.env.AXIOS_HOST || 'localhost'}:${process.env.HTTPS_PORT || process.env.PORT || 3000}`
}

export default axios.create(options)
