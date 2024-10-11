import { Request, Response } from 'express';
import Chart from '../models/charts';


export const getChart = async (req: Request, res: Response) => {
    const { name } = req.params;
    const chart = await Chart.findOne({
        where: {
            name,
        },
    });
    console.log("CHART: ", chart);
    if (chart) {
        res.json(chart);
    } else {
        res.status(404).json({
            msg: ` No existe un chart con el nombre ${name}`,
        });
    }
};
