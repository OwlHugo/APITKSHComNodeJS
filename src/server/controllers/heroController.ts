import { Request, Response } from 'express';

export const getAllHeroes = async (req: Request, res: Response) => {
  try {
    res.send('Get All Heroes');
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export const getHeroById = async (req: Request, res: Response) => {
  try {
    res.send('Get Hero By ID');
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export const createHero = async (req: Request, res: Response) => {
  try {
    res.send('Create Hero');
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export const updateHero = async (req: Request, res: Response) => {
  try {
    res.send('Update Hero');
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export const deleteHero = async (req: Request, res: Response) => {
  try {
    res.send('Delete Hero');
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};
