const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const post = await Post.find()
        res.json(post)
    } catch (err) {
        res.json(err)
    }
})

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (err) {
        res.json(err)
    }
})


router.post('/', async (req, res) => {
    const post = new Post({ title: req.body.title, description: req.body.description })
    try {
        const savePost = post.save()
        res.json(savePost)
    } catch (err) {
        res.json(err)
    }
})



module.exports = router;