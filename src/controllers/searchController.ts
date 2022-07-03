import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import petModel from "../models/petModel";

export const search = (req:Request, res: Response) => {
  const petName: string = req.query.q as string

  if(!petName) return res.redirect('/')

  res.render('pages/page', {
    menu: createMenuObject(''),
    list: petModel.findByName(petName),
    petName
  })
}
