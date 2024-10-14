import { Router } from 'express';
import { createEvent, getEvents, deleteEvent, updateEvent } from '../controllers/calendar';

const router = Router();

router.get('/', getEvents); 
router.delete('/:id', deleteEvent); 
router.post('/', createEvent);
router.put('/:id', updateEvent);

export default router;