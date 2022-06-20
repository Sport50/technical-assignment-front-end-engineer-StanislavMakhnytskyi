import type { NextApiRequest, NextApiResponse } from 'next'
const fs = require('fs')

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const articles = require('./db.json')

  switch (method) {
    case 'GET':
      res.status(200).json(articles.slice(-5))
      break
    case 'POST':
      articles.push({ id: articles.length.toString(), ...body })
      fs.writeFileSync('./pages/api/db.json', JSON.stringify(articles))
      res.status(201).json(articles)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
