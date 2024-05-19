const express = require("express")
const router = express.Router()

// import 
const {createComment} = require("../controllers/commentController")
const {createPost} = require("../controllers/postController")
const { createLike, unlikePost } = require("../controllers/likeController")

// mapping
router.post("/comment/create", createComment)
router.post("/create/post", createPost)
router.post("/likes/like" , createLike)
router.post("/unlikes/like" , unlikePost)



module.exports = router