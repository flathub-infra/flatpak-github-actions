const { computeHash } = require('../index')

test('The manifest hash should be computed properly', async () => {
  const hash = await computeHash('./tests/manifest-1.yaml')
  expect(hash).toBe('83c43af4e8b865a3a116b3759c7395dce19e965f0e1d639965826267c145df30')

  const hash2 = await computeHash('./tests/manifest-3.json')
  expect(hash2).toBe('201c1afd5edd78d766cc9b0b74852e9459a7231bb40dcda0be4a73b1c394d75b')
})
