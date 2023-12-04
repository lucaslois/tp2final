import express from 'express';
import cors from 'cors';

import connection from './database/index.js';
import routes from './routes.js';
import { errorHandler } from './middlewares/validationError.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));

// Routes
app.use('/', routes);

app.use('/health', async (_req, res) => {
  res.status(200).send({
    status: '🟢 System operational',
  });
});

app.use(errorHandler)

// DB
await connection.sync({ force: false });

// Server
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
