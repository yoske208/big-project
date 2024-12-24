import express, { IRouter }  from 'express'
import analysisController  from "../Controller/AnalysisController"
import relationshipsController  from "../Controller/RelationshipsController"
import crudController  from "../Controller/CRUDController"

const router:IRouter = express.Router()

router.use("/api/analysis",analysisController );
router.use("/api/relationships",relationshipsController );
router.use("/crud",crudController );




export default router