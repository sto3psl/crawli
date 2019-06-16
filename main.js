import { h, render } from 'preact'
import { useState } from 'preact/hooks'

const root = document.getElementById('app')

const DOMAIN = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT}/api` : '/api'

function App({ search }) {
  const url = search.get('c')
  const [status, setStatus] = useState({ type: 'idle' })
  const [preview, setPreview] = useState({ url })

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ type: 'loading' })
    const data = new FormData(e.target)

    try {
      const url = data.get('url')
      const response = await (await fetch(`${DOMAIN}/${url}`, {
        mode: 'cors'
      })).json()
      setStatus({ type: 'success' })
      setPreview(response)
    } catch (error) {
      console.log(error)
      setStatus({ type: 'error', error })
    }
  }
  console.log(status, preview)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="url" name="url" value={url} type="text" />
        <button type="submit">🔎 Crawl link</button>
      </form>
      {status.type === 'success' && (
        <div>
          <h2>{preview.title}</h2>
          <img src={preview.image} />
        </div>
      )}
    </div>
  )
}

const search = new URLSearchParams(location.search)

render(<App search={search} />, root)
