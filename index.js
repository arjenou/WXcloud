const express = require('express')
const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
  console.log('收到请求:', req.body)
  
  if (req.body.action === 'CheckContainerPath') {
    console.log('收到路径检测请求')
    return res.send('success')
  }
  
  res.send('success')
})

const port = 80
app.listen(port, () => {
  console.log(`服务已启动，监听端口 ${port}`)
})
