import { ReactNode, ReactElement } from "react";

export interface SidebarItem {
  name: string;
  icon: ReactNode;
  path: string;
}

export interface RouteDefinition {
  path: string;
  element: ReactElement;
}

//Dashboard TabData 
export interface TabProps {
  title: string;
  number: number;
  growth: number;
}

// Feedback type
export interface FeedbackItem {
  userName: string;
  rating: number;
  date: string;
  feedback: string;
  photosLink: string;
}


export interface RatingStarsProps {
  count: number;
  value: number;
  size?: number;
  color2?: string;
  edit?: boolean;
}

