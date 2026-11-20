import { NextResponse } from 'next/server';
import { initialTasks } from '@/lib/tasks';

// API com dados demonstrativos: GET /api/tasks
export async function GET() {
  return NextResponse.json(initialTasks);
}
