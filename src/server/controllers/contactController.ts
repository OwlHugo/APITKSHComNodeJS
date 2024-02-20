
import { Request, Response } from 'express';

export const getAllContacts = async (req: Request, res: Response) => {
  try {
    res.send('Get All Contacts');
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export const getContactById = async (req: Request, res: Response) => {
  try {
    res.send('Get Contact By ID');
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export const createContact = async (req: Request, res: Response) => {
  try {
    res.send('Create Contact');
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    res.send('Update Contact');
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    res.send('Delete Contact');
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};
