import type { NextApiRequest, NextApiResponse } from 'next'

const articles = [
  {
    id: '1',
    title: 'Historic downtown Wilmington lot could see new development',
    body: 'Now a gravel parking lot, the land at 115 and 117 S. Water St. once housed an 1840s-era ice house. Structures built on the lot over the years have served as a fish and oyster market and as a beloved bar, which sat on the site until its demolition in 2004.',
    email: 'author@gmail.com',
    date: '',
  },
  {
    id: '2',
    title: 'Geis Development breaks ground',
    body: 'This new 500,000 SF Spec Distribution Center/Warehouse complex in Fort Myers, Florida is designed for users who have needs for 32’ clear ESFR sprinkler protected high cube storage. The complex will be comprised of 2 identical buildings of 250,000sqft each designed to accommodate tenants ranging in sizes from as small as 37,000sqft up to single tenant occupancy of the entire 250,000sqft.',
    email: 'next-author@gmail.com',
    date: '',
  },
  {
    id: '3',
    title: 'Is Collecting Sports Cards Even a Hobby Anymore?\n',
    body: 'Is collecting sports cards a hobby anymore? Can kids even do this now? Good luck to the 16-year-old LeBron James fan who wants to add pieces of memorabilia to his collection. Would he rather have a used car or a James autographed or rookie card? Both can fetch about the same price, depending on the year — and now the grade — of the card.',
    email: 'hobby-theme@mail.co',
    date: '',
  },
  {
    id: '4',
    title: 'Is Hobby Lobby open on Juneteenth 2022?',
    body:
      'Bob Ward was there from the beginning\n' +
      'Bob Ward was a part of the fabric of then-Highlands Elementary from the ground up: He was on the construction site before the school opened in 1959, according to his family, and he served as the first principal.',
    email: 'aircraft@yahoo.com',
    date: '',
  },
  {
    id: '5',
    title: 'His hobby was service',
    body: 'A contemporary news report about the school\'s name change stated: "Ward has been principal of the east side Ocala school since it was built in the late 1950s. Thousands of children have spent their early education in the school and many of the parents of those children want Ward remembered as an outstanding contributor to the children\'s development."',
    email: 'palm-beach@yahoo.com',
    date: '',
  },
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id, name },
    method,
  } = req

  console.log(req.body)

  switch (method) {
    case 'GET':
      debugger
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
