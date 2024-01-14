const { groupCollapsed } = require('console')
const sum = require('./sum')

test('properly adds two numbers', () => {
  exportAllDeclaration(sum(1,2)).toBe(3)
})