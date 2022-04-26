import { Fav } from "../../models/index.js";

// Controller get all Favs
export const getAllLists = async (req, res) => {
  try {

    const favs = await Fav.find();
    if (favs.length === 0) res.status(204).send();
    else res.status(200).json(favs);

  } catch (error) {

    res.status(500).json({ error });

  }
};

// Controller get one fav
export const getOneList = async (req, res) => {
  const { id: idFav } = req.params;
  const fav = await Fav.findById(idFav);
  res.json(fav);
};

// Controller create one fav
export const createList = async (req, res) => {
  try {
    const fav = new Fav({ ...req.body });
    const newFav = await fav.save();
    newFav && res.status(201).json(newFav);
  } catch (error) {
    response.status(500).json({ error });
  }
};

// Controller delete by id
export const deleteList = async (req, res) => {
  const { id: idFav } = req.params;
  try {
    const favToDelete = await Fav.findById(idFav);
    if (!favToDelete) {
      res.status(204).send({ err: "No fav to delete" });
    } else {
      const deletedFav = await Fav.deleteOne(favToDelete);
      if (deletedFav) res.status(200).json(deletedFav);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
