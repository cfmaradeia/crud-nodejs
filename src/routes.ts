import {Request, Response, Router} from "express";
import db from "./db/database";
import { posts } from "./db/schema";

const router = Router();


router.get("/", (req: Request, res: Response) => {
    res.status(200).send("OK");
});

router.get("/healthcheck", (req: Request, res: Response) => {
    try {
        res.status(200).send("OK");
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/api/v1/posts", async (req: Request, res: Response) => {
    const result = await db.select().from(posts);
    res.status(200).json(result);
});

router.get("/api/v1/posts/:id", (req: Request, res: Response) => {
    res.status(200).send("Post by id");
});

router.post("/api/v1/posts", (req: Request, res: Response) => {
    res.status(200).send("Create post");
});

router.put("/api/v1/posts/:id", (req: Request, res: Response) => {
    res.status(200).send("Edit post");
});

router.delete("/api/v1/posts:id", (req: Request, res: Response) => {
    res.status(200).send("Delete post");
});

export default router;