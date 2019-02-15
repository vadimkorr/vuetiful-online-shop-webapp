import { SERVER_URL } from '@/consts'
import axios from 'axios'

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
}

const validStatuses = [200, 201, 202, 203, 204, 300, 301, 302, 303, 304]

function getHeaders (multipart = false) {
  let defaultHeaders = DEFAULT_HEADERS

  if (multipart) {
    defaultHeaders = {}
  }

  if (localStorage.token) {
    defaultHeaders = {
      Authorization: `JWT ${localStorage.token}`,
      ...defaultHeaders
    }
  }

  return defaultHeaders
}

export function checkResponse (response) {
  if (validStatuses.includes(response.status)) {
    return response
  }

  // If not authorized then reset token
  // and redirect to login page
  if (response.status === 401) {
    localStorage.removeItem('token')
    return Promise.reject(new Error('USER_ANONYMOUS'))
  }

  let err = new Error(response.statusText)
  err.response = response

  return Promise.reject(err)
}

export function processAPIErrors (apiErrors) {
  let errors = {}

  if (apiErrors) {
    for (let key of Object.keys(apiErrors)) {
      let err = apiErrors[key]

      errors[key] = err

      if (typeof err === 'object' || err.hasOwnProperty('length')) {
        errors[key] = apiErrors[key][0]
      }
    }
  }

  return errors
}

function qs (params) {
  const esc = encodeURIComponent
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&')
}

// Wraps axios and provides
// more convenient post method
// calls with data
export function post (uri, data) {
  return axios.post(getFullUrl(uri), data, {
    headers: getHeaders(),
    withCredentials: true
  })
}

//  Wraps axios and provides
//  more convenient put method
//  calls with data
export function put (uri, data) {
  return axios.put(getFullUrl(uri), data, {
    headers: getHeaders(),
    withCredentials: true
  })
}

// Wraps axios and provides
// more convenient delete method
export function remove (uri) {
  return axios.delete(getFullUrl(uri), {
    headers: getHeaders(),
    withCredentials: true
  })
}

// Wraps axios and provides
// more convenient get method
// calls with data.
export function get (uri, data = {}) {
  let normalizedUri = uri
  if (Object.keys(data).length > 0) {
    normalizedUri = `${uri}?${qs(data)}`
  }

  return axios.get(getFullUrl(normalizedUri), {
    headers: getHeaders(),
    withCredentials: true
  })
}

export function upload (uri, formData) {
  return axios.post(getFullUrl(uri), formData, {
    headers: getHeaders(),
    withCredentials: true
  })
}

// export function upload (uri, data) {
//   return fetch(getFullUrl(uri), {
//     headers: getHeaders(true),
//     cors: true,
//     method: 'POST',
//     body: data
//   })
// }

function getFullUrl (uri) {
  return `${SERVER_URL}${uri}`
}
