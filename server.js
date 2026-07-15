import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Lead Schema
const leadSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  timestamp: { type: String, required: true },
  details: { type: String }
});

const Lead = mongoose.model('Lead', leadSchema);

// API Routes
app.post('/api/leads', async (req, res) => {
  try {
    const { type, name, phone, timestamp, details } = req.body;
    if (!type || !name || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save to MongoDB
    const newLead = new Lead({ type, name, phone, timestamp, details });
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({ error: 'Failed to save lead' });
  }
});

app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ _id: -1 }); // Get newest first
    res.status(200).json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
