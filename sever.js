const express = require('express');
const cors = require('cors');

const app = express();

//使用cors，允許跨域
app.use(cors());
//能解析urlencoded格式的post請求體參數
app.use(express.urlencoded());
//能解析json格式的請求體參數
app.use(express.json());

app.get('/products1', (req, res) => {
  setTimeout(() => {
    res.send([
      { id: 1, name: 'product1' },
      { id: 2, name: 'product2' },
      { id: 3, name: 'product3' },
    ]);
  }, 1000 + Math.random() * 2000);
});

app.get('/products2', (req, res) => {
  setTimeout(() => {
    res.send([
      { id: 1, name: 'product1-1' },
      { id: 2, name: 'product2-1' },
      { id: 3, name: 'product3-1' },
    ]);
  }, 1000 + Math.random() * 2000);
});

app.listen(4000, () => {
  console.log('sever app start on port 4000');
});
