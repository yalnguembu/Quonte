import type { TASK_STATUS, TASK_CATEGORIES, TASK_PRIORITY } from "@/utils/enum";
export interface Task {
  id: number;
  title: string;
  summary: string;
  status: TASK_STATUS;
  category: TASK_CATEGORIES;
  priority: TASK_PRIORITY;
  reporter: string;
  assignee: string;
  subTasks: object;
}
