import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import petModel from "../models/petModel";

export const home = (req:Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg',
    },
    list: petModel.getAll()
  })
}

export const dogs = (req:Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Todos os cachorros',
      background: 'banner_dog.jpg',
    },
    list: petModel.findByType('dog')
  })
}

export const cats = (req:Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Todos os gatos',
      background: 'banner_cat.jpg',
    },
    list: petModel.findByType('cat')

  })
}

export const fishes = (req:Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Todos os peixes',
      background: 'banner_fish.jpg',
    },
    list: petModel.findByType('fish')
  })
}
