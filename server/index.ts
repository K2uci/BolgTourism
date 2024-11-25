const app = require('./src/app')
import { PrismaClient } from '@prisma/client';
// import authRoutes from './routes/auth';
// import postRoutes from './routes/posts';
// import destinationRoutes from './routes/destinations';

// const prisma = new PrismaClient();



// app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/destinations', destinationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});