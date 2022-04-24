import mongoose from "mongoose";

// schema Favs
const schemaFavs = { 
  ownerId:String,
  nameLista:String,
  favs: [
    { 
      titulo:String, 
      descripcion:String, 
      link:String 
    }
  ] 
}

// Favs model
const Fav = mongoose.model("Fav", schemaFavs, "favs");

export default Fav;
