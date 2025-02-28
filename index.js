const express = require('express')
const app = express()

app.use(express.json())

// 添加日志中间件
app.use((req, res, next) => {
  console.log('收到请求:', {
    method: req.method,
    path: req.path,
    body: req.body,
    query: req.query
  })
  next()
})

// 路由处理
app.post('/', async (req, res) => {
  try {
    console.log('请求体:', req.body)
    
    if (req.body.action === 'CheckContainerPath') {
      console.log('收到路径检测请求')
      return res.status(200).send('success')
    }
    
    res.status(200).send('success')
  } catch (error) {
    console.error('处理请求时出错:', error)
    res.status(500).send('error')
  }
})

// 健康检查端点
app.get('/health', (req, res) => {
  res.status(200).send('ok')
})

const port = 80
app.listen(port, () => {
  console.log(`服务已启动，监听端口 ${port}`)
})
