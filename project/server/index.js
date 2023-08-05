const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const authUser=require("./routes/auth")
const userRoute=require("./routes/users")
const complainRoute=require("./routes/complains")
const nodemailer = require('nodemailer');
const MongoClient = require('mongodb');

const cors = require("cors");

app.use(cors());
app.use(express.json())

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(console.log("Connected to mongoDB"))
.catch((err) => console.log(err))

app.use("/server/auth",authUser)
app.use("/server/users",userRoute)
app.use("/server/complains",complainRoute)
app.post('/server/send-mail', async (req, res) => {
    const { email, _id } = req.body;
    const transporter = nodemailer.createTransport({
        host: 'Gmail',
        auth: {
          user: process.env.user,
          pass: process.env.password,
        },
      });
       // Configure the email options
  const mailOptions = {
    from: process.env.user,
    to: email,
    subject: 'Thank you for your message',
    text: `Dear User,\n\nThank you for reaching out. We have received your message and will get back to you soon. Please note your Complain Id-${_id}\n\nStay Strong`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Form submitted successfully. Thank you!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while sending the email.' });
  }
});
// Database and collection names
const dbName = 'hackathonDB';
const collectionName = 'complains';
app.get('/server/complains/:id', async (req, res) => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const id = req.params.id;
    const document = await collection.findOne({ _id: id });

    if (!document) {
      res.status(404).send('Document not found');
    } else {
      res.json(document);
    }

    client.close();
  } catch (error) {
    console.error('Error fetching document:', error);
    res.status(500).send('Internal Server Error');
  }
});

  

app.listen("5000",()=>{
    console.log("Backend is running")
})