import mercury from '../../data/mercury.json'

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(mercury))
}
