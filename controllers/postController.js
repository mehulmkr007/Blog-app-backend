const Post = require("../models/postModel")

exports.createPost = async (req,res)=>{
   try {
        const {title,body} = req.body

        const post = new Post({
            title,
            body
        })

        const savePost = await post.save()

        res.status(200).json({
            post : savePost
    })

   } catch (error) {
        res.status(500).json({
            message : "error in Post"
        })
   }
}