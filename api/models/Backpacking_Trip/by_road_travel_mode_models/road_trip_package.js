const mongoose=require('mongoose');

const backpacking_road_trip_package=mongoose.Schema({
    
    package_id:{type:String},
    backpacking_trip_travel_mode_id:{type:mongoose.Schema.Types.ObjectId,ref:'Backpacking_Trip_Travel_Mode'},
    package_front_image_path:{type:String},
    package_details_web_url:{type:String},
    package_details_pdf_path:{type:String},
    package_name:{type:String},
    package_description:{type:String},
    package_number_of_days:{type:String},
    is_available:{type:Boolean,default:1},
    package_offered_by:{type:String}

});

module.exports=mongoose.model('Backpacking_Road_Trip_Package',backpacking_road_trip_package);