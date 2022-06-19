import type {NextApiRequest, NextApiResponse} from 'next'

const articles = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: {id, name},
    method,
  } = req

  console.log(req.body);

  switch (method) {
    case 'GET':
      res.status(200).json(articles.slice(-5))
      break
    case 'POST':
      articles.push(req.body)
      res.status(201).json(articles)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
