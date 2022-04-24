import express from "express";

import { favCtrl } from "../../controllers/index.js";

import { validateToken } from "../../middlewares/index.js";

const { 
  getAllFavs, 
  createFav, 
  getOneFav, 
  deleteFav } = favCtrl;

const router = express.Router();

const favRoutes = {
  GET_ALL_FAVS: "/favs",
  GET_ONE_FAV: "/favs/:id",
  CREATE: "/favs/create",
  DELETE: "/favs/delete/:id",
};

router.get(favRoutes.GET_ALL_FAVS, validateToken, getAllFavs);
router.get(favRoutes.GET_ONE_FAV, validateToken, getOneFav);
router.post(favRoutes.CREATE, validateToken, createFav);
router.delete(favRoutes.DELETE, validateToken, deleteFav);

export default router;
