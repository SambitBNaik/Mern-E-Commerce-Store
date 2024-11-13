import express from 'express';
import { createProduct, 
         deleteProduct, 
         getAllProudcts,
         getFeaturedProducts, 
         getProductsByCategory, 
         getRecommendedProducts,
         toggleFeaturedProduct, 
        
} from '../controllers/product.controller.js';
import { adminRoute, protectRoute } from '../middleware/auth.middleware.js';

const router= express.Router();

router.get("/",protectRoute,adminRoute,getAllProudcts);
router.get("/featured",getFeaturedProducts);
router.get("/category/:category",getProductsByCategory);
router.get("/recommendations",getRecommendedProducts);
router.post("/",protectRoute,adminRoute,createProduct);
router.patch("/:id",protectRoute, adminRoute,toggleFeaturedProduct);
router.delete("/:id",protectRoute,adminRoute,deleteProduct);


export default router;