import { Response } from "express";

const handleHttp = (res: Response, error: string, errorBruto: any) => {
    console.error(errorBruto); // Log para depuración
    res.status(500).json({ error });
};


export {handleHttp};