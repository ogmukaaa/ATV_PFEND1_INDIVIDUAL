import { Router } from 'express';
import { atualizar, buscar, criar, listar, remover } from '../controllers/TenisController.js';

const router = Router();

router.get('/', listar);
router.get('/:id', buscar);
router.post('/', criar);
router.put('/:id', atualizar);
router.delete('/:id', remover);

export default router;
