// import models
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")

exports.createComment = async (req,res)=>{
    try {
        // fetch the data from body 
        const {user,post,body} = req.body
        // create new comment 
        const comment = new Comment({
            user,
            post,
            body
        })
        // send(save) into the database
        const saveComment = await comment.save()


        // ****now update that comment into post***

        // 1.find post by _id from Post 
        // 2.push saveComment into post's comments array
        // 3.return the updated value
        
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            {$push :{comments : saveComment._id}},
            {new : true}
        ).populate("comments")
        .exec() 

        res.json(
            {
                post : updatedPost
            }
        )
    } 
    
    catch (error) {
        res.status(500).json({
            message : "error FAIL comment"
        })
    }
}