import { Router } from 'express';
import { AppDataSource } from '../config/database';
import { Task } from '../entities/Task';

const router = Router();
const taskRepository = AppDataSource.getRepository(Task);


router.get('/', async (req:any, res):Promise<any> => {
    try {
      const taskRepository = AppDataSource.getRepository(Task);
      const tasks = await taskRepository.find({
        where: { user: { id: req.user.id } },
      });
      res.json(tasks);
    } catch (error) {
      console.error('Fetch tasks error:', error);
      res.status(500).json({ error: 'Error fetching tasks' });
    }
  });

router.post('/', async (req:any, res) => {
  try {
    const { title, description } = req.body;
    const task = taskRepository.create({
      title,
      description,
      user: { id: req.user.id }
    });
    await taskRepository.save(task);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' });
  }
});

router.put('/:id', async (req:any, res) => {
  try {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;
    
    await taskRepository.update(
      { id: parseInt(id), user: { id: req.user.id } },
      { title, description, isComplete }
    );
    
    res.json({ message: 'Task updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating task' });
  }
});

router.delete('/:id', async (req:any, res) => {
  try {
    const { id } = req.params;
    await taskRepository.delete({ id: parseInt(id), user: { id: req.user.id } });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task' });
  }
});

export default router;
