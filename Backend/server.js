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

/* ---------------- CORS SETUP ---------------- */
const allowedOrigins = [
  'https://deal-o-city-admin.vercel.app',
  'https://deal-o-city-cp8e.vercel.app',
  'http://localhost:5173',
  'http://localhost:5174'
];

app.use(cors({
  origin: function (origin, callback) {
   
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// IMPORTANT: handle preflight requests
app.use(cors());
app.options(/.*/, cors());

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