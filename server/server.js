require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const paymentRoutes = require('./routes/payments');
const secondhandRoutes = require('./routes/secondhand');

const ecoRoutes = require('./routes/eco');

const app = express();

app.use(cors({
  origin: "https://vercel.com/anurag-rawats-projects-5cda1f54/ecocreds/D1e9n9m2i1NaqzWWysP845fb72Pq",
  credentials: true
}));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/secondhand', secondhandRoutes);

app.use('/api/eco', ecoRoutes);

const PORT = process.env.PORT || 5000;

mongoose
.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() =>
  app.listen(PORT, () =>
    console.log(`Server running on ${PORT}`)
  )
)
.catch(err => console.error(err));
