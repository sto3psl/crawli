const got = require('got')
const cheerio = require('cheerio')

module.exports = async (req, res) => {
  const url = req.url.replace('/api/', '')

  const { body } = await got(url)

  const $ = cheerio.load(body)

  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'max-age=60, s-maxage=3600') // 3600s = 1h
  res.end(
    JSON.stringify({
      title: $('head title').text(),
      type: $('head meta[property="og:type"]').attr('content'),
      image: $('head meta[property="og:image"]').attr('content'),
      url
    })
  )
}
