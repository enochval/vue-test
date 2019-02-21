export default function ({$axios}) {
  $axios.setHeader('x-access-token', 'ki494034jkjdfsi49e8943iufkljfdkj4oi3uu498usajhasdfoi4jkjfi434')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      console.log('error.response')
    }
  })
}