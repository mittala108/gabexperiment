const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Weekend_Trip_Package_Date=require('../../models/Weekend_Trip/weekend_trip_package_date');


router.get('/get_weekend_trip_package_dates',(req,res)=>{

    Weekend_Trip_Package_Date.find({weekend_trip_package_id:req.body.weekend_trip_package_id})
    .exec()
    .then(result=>{
        res.json({
            data:result,
            count:result.length
        });
    })
    .catch(err=>{
        res.json({
            error:err
        });
    });
});



router.post('/post_weekend_trip_paackage_date',(req,res)=>{

    const newData=new Weekend_Trip_Package_Date({

        _id:mongoose.Types.ObjectId(),
        weekend_trip_package_id:req.body.weekend_trip_package_id,
        date:req.body.date
    });


    newData.save()
    .then(result=>{
        res.json({
            message:'Data saved successfully'
        });
    })
    .catch(err=>{
        res.json({
            error:err
        });
    });
});



module.exports=router;