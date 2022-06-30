const { Router } = require('express');
const express = require('express');
const router = express.Router();


/* Required models to be used */
const User = require('../models/user');
const Blog = require('../models/blog');


router.get('/users/search/:id/Blogs', async(req,res) => {
    if (req.session.user_id) {
        const id = req.params.id
        const user = await User.findById(id)
        const blogs = await Blog.findById(id)
        res.render('showBlogs', {user,blogs})
    }
    else {
        res.redirect('/users/existing')
    }
})


module.exports = router