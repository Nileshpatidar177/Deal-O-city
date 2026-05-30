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


connectDB();
connectCloudinary();

const allowedOrigins = ['https://deal-o-cityy-official.vercel.app','https://deal-o-cityy-admin-official.vercel.app','http://localhost:5173','http://localhost:5174'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};
app.use(cors(corsOptions));



app.use(express.json());


app.get('/', (req, res) => {
  res.send('Home ROUTE');
});

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);


app.listen(port, () => {
  console.log(`✅ Backend running on http://localhost:${port}`);
});
