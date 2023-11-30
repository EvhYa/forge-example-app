import service from "../services/aps.js";

const getToken = async (req, res, next) => {
   try {
      res.json(await service.getPublicToken());
   } catch (error) {
      next(error);
   }
};

export default {
   getToken,
};
