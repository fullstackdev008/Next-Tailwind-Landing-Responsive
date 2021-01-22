import axios from 'axios'
import querystring from 'querystring'

let token

function isTokenValid() {
  if (token === undefined) {
    return false
  }
  return new Date().getTime() - token.createdAt < 2592000000
}

async function getToken(connectUrl, client_id, client_secret) {
  if (isTokenValid()) {
    return token
  }
  const accessToken = await axios.post(
    connectUrl,
    querystring.stringify({
      grant_type: 'client_credentials',
      client_id: client_id,
      client_secret: client_secret,
      scope: 'squidex-api',
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )

  if (!accessToken) {
    throw Error('Error retrieving token!')
  }
  token = accessToken.data
  token.createdAt = new Date()

  return token
}
