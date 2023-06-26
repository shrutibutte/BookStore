const router = require('express').Router()
const bookModels = require('../models/bookModel')

router.post('/add', async(req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModels(data);
        await newBook.save().then(()=>{
            res.status(200).json({message:"book added sucessfully"})
        })
    } catch (error) {
        console.log(error)
    }
})

// get data from database
router.get('/getBook',async(req,res)=>{
    let book ;
    try {
        const book = await bookModels.find();
        res.status(200).json({book});
    } catch (error) {
        console.log(error)
    }
})

router.get('/getBook/:id',async(req,res)=>{
    let book ;
    try {
        const book = await bookModels.findById(req.params.id);
        res.status(200).json({book});
    } catch (error) {
        console.log(error)
    }
})

// update Book

router.put('/updateBook/:id',async(req,res)=>{
    let book ;
    const id = req.params.id;
    const {bookname,author,price,description,image} = req.body;
    
    try {
        book = await bookModels.findByIdAndUpdate(
            id,{
                bookname,
                author,
                price,
                description,
                image    
            }
        )
     book = await book.save().then(()=>{
        res.status(200).json({message:"book updated sucessfully"})

     })        
    } catch (error) {
        console.log(error)
    }
})



// delete book

router.delete('/deleteBook/:id',async(req,res)=>{

    const id   =  req.params.id;
    try {
       await bookModels.findByIdAndDelete(id).then(()=>{
        res.status(200).json({message:"book deleted sucessfully"})
        })
      
    } catch (error) {
        console.log(error)
    }
})

module.exports = router ;