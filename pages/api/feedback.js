import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.name;
    const email = req.body.email;
    const purpose = req.body.purpose;
    const portfolio = req.body.portfolio;
    const message = req.body.message;
    const location = req.body.location;
    const comrade = req.body.comrade;

    const newFeedback = {
      name: name,
      email: email,
      purpose: purpose,
      portfolio: portfolio,
      message: message,
      location: location,
      comrade: comrade,
    };

    const clientDetails = `mongodb+srv://${process.env.DB_MUSER}:${process.env.DB_MPASSWD}@${process.env.DB_BASE}.${process.env.DB_AREA}.mongodb.net/?retryWrites=true&w=majority`;

    //Store In A Database
    const client = await MongoClient.connect(clientDetails);
    const db = client.db("workWithUs");
    const result = await db.collection("feedbacks").insertOne(newFeedback);

    res.status(201).json({ message: "Success", feedback: newFeedback });
    client.close();
  } else {
    res.json({ message: "This Route is not a 'GET' Method Route. " });
  }
}
