import axios from 'axios';
import { NextResponse } from 'next/server';
const api = axios.create({
  baseURL: 'http://172.16.43.64:3000/luxlink',
  headers: { 'Content-Type': 'application/json' },
});

export const POST = async (request: Request) => {
  try {
    const res = await api.request({ url: '/device', method: 'GET' });

    return NextResponse.json(res.data);
  } catch (error: any) {
    let statusText = 'LUXLINK Error! ';
    return NextResponse.json({}, { status: 400, statusText });
  }
};
