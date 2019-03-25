const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
  // res.send("Hello");
});

// Add Post
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadPostsCollection() {
  // try {
    // console.log("try");
    const client = await mongodb.MongoClient.connect(
      'mongodb+srv://belloq:1234@medival-math-mania-dodmo.mongodb.net/test?retryWrites=true',
      {
        useNewUrlParser: true
      }
    );
  // } catch(err) {
  //   console.log("Error: " + err + " :End");
  // }

  return client.db('vue_express').collection('posts');
};

module.exports = router;
