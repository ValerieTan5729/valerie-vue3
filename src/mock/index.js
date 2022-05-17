import * as Mock from 'mockjs'

const responseData = Mock.mock(/dev-api\//, 'get', {
  code: 200,
  msg: 'success',
  data: []
})

export default responseData
