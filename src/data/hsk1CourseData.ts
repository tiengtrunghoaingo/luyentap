import { LessonData } from '../types';
import { LESSONS_1_TO_5 } from './lessons/lesson1_5';
import { LESSONS_6_TO_10 } from './lessons/lesson6_10';
import { LESSONS_11_TO_15 } from './lessons/lesson11_15';

export const HSK1_ALL_LESSONS: LessonData[] = [
  ...LESSONS_1_TO_5,
  ...LESSONS_6_TO_10,
  ...LESSONS_11_TO_15
];

export function getLessonByNumber(num: number): LessonData | undefined {
  return HSK1_ALL_LESSONS.find(l => l.lessonNumber === num);
}

export function getLessonById(id: string): LessonData | undefined {
  return HSK1_ALL_LESSONS.find(l => l.id === id);
}
