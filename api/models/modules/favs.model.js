import mongoose from "mongoose";

// schema Favs
const schemaFavs = { 
  nameList:String,
  favs: [
    { 
      title:String, 
      description:String, 
      link:String 
    }
  ] 
}

// Favs model
const Fav = mongoose.model("Fav", schemaFavs, "favs");

export default Fav;
