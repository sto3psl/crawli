module.exports = (req, res) => {
  const url = req.url.replace('/api/', '')

  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 's-maxage=3600, max-age=60') // 3600s = 1h
  res.end(JSON.stringify({ title: '', type: '', image: '', url }))
}
