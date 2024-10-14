import { Request, Response } from 'express';
import Marker from '../models/marker';


export const getMarkers = async (req: Request, res: Response) => {
    try {
        const markers = await Marker.findAll();
        res.json(markers);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching markers', error });
    }
};

