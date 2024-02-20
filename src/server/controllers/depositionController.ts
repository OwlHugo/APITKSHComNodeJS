import { Request, Response } from 'express';
import { Deposition } from '../models/depositionModel';

export const getAllDepositions = async (req: Request, res: Response) => {
  try {
    const depositions = await Deposition.findAll();
    res.json(depositions);
  } catch (error) {
    console.error('Error fetching depositions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getDepositionById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const deposition = await Deposition.findByPk(id);
    if (!deposition) {
      return res.status(404).json({ message: `Deposition with ID ${id} not found` });
    }
    res.json(deposition);
  } catch (error) {
    console.error(`Error fetching deposition with ID ${id}:`, error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createDeposition = async (req: Request, res: Response) => {
  const depositionData = req.body;
  try {
    const deposition = await Deposition.create(depositionData);
    res.status(201).json(deposition);
  } catch (error) {
    console.error('Error creating deposition:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateDeposition = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedDepositionData = req.body;
  try {
    const deposition = await Deposition.findByPk(id);
    if (!deposition) {
      return res.status(404).json({ message: `Deposition with ID ${id} not found` });
    }
    await deposition.update(updatedDepositionData);
    res.json({ message: `Deposition with ID ${id} updated successfully` });
  } catch (error) {
    console.error(`Error updating deposition with ID ${id}:`, error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteDeposition = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const deposition = await Deposition.findByPk(id);
    if (!deposition) {
      return res.status(404).json({ message: `Deposition with ID ${id} not found` });
    }
    await deposition.destroy();
    res.json({ message: `Deposition with ID ${id} deleted successfully` });
  } catch (error) {
    console.error(`Error deleting deposition with ID ${id}:`, error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
