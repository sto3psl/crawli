const got = require('got')
const cheerio = require('cheerio')

module.exports = async (req, res) => {
  const url = req.url.replace('/api/', '')

  const { body } = await got(url, {
    headers: {
      'user-agent': 'Crawli (https://github.com/sto3psl/crawli)'
    }
  })

  const $ = cheerio.load(body)

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'max-age=60, s-maxage=3600') // 3600s = 1h

  const info = getInfo($)
  const openGraph = getOpenGraphInfo($)
  const twitterCard = getTwitterCardInfo($)

  const list = [...info, ...openGraph, ...twitterCard].reduce((obj, [key, value]) => {
    obj[key] = value
    return obj
  }, {})

  res.end(JSON.stringify(list))
}

function getInfo($) {
  const selectors = [
    ['title', $('head title').text()],
    ['description', $('head meta[name="description"]').attr('content')],
    ['author', $('head meta[name="author"]').attr('content')],
    ['canonical', $('head link[rel="canonical"]').attr('content')],
    ['license', $('head link[rel="license"]').attr('content')],
    ['language', $('html').attr('lang')]
  ]

  return selectors
}

function getOpenGraphInfo($) {
  const selectors = [
    ['type'],
    ['title'],
    ['description'],
    ['url'],
    ['image'],
    ['audio'],
    ['video'],
    ['determiner', ''],
    ['locale', 'en_US'],
    ['locale:alternate', []],
    ['site_name']
  ]

  return selectors.map(([property, defaultValue]) => [
    `og:${property}`,
    $(`[property="og:${property}"]`).attr('content') || defaultValue
  ])
}

function getTwitterCardInfo($) {
  const selectors = [
    ['card'],
    ['site'],
    ['site:id'],
    ['creator'],
    ['creator:id'],
    ['description'],
    ['title'],
    ['image'],
    ['image:alt'],
    ['player'],
    ['player:width'],
    ['player:height'],
    ['player:stream'],
    ['app:name:iphone'],
    ['app:id:iphone'],
    ['app:url:iphone'],
    ['app:name:ipad'],
    ['app:id:ipad'],
    ['app:url:ipad'],
    ['app:name:googleplay'],
    ['app:id:googleplay'],
    ['app:url:googleplay']
  ]

  return selectors.map(([property, defaultValue]) => [
    `twitter:${property}`,
    $(`[name="twitter:${property}"]`).attr('content') || defaultValue
  ])
}
