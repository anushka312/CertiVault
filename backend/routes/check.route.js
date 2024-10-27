import { Router } from "express";


const router = Router()


router.route('/server').get((req, res) => {
    return res.json({
        data: {name: "Whoopsie Daisy"}
    })
} )

export default router