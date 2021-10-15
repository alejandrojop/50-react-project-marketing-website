import { ComponentType } from 'react';

export interface CardProps {
  cardImg: unknown;
  cardTitle: string;
  cardTextContent: string;
  cardActions: CardActions;
}

export interface CardActions {
  getComponent: () => ComponentType;
}
