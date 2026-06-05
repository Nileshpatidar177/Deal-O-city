import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

/* ---------------- DB CONNECTION ---------------- */
connectDB();
connectCloudinary();

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://deal-o-city-cp8e.vercel.app',
  'https://deal-o-city-admin.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token']
}));

/* ---------------- MIDDLEWARE ---------------- */
app.use(express.json());

/* ---------------- ROUTES ---------------- */
app.get('/', (req, res) => {
  res.send('Home ROUTE 🚀');
});

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

/* ---------------- START SERVER ---------------- */
app.listen(port, () => {
  console.log(`✅ Backend running on http://localhost:${port}`);
});

export default app;