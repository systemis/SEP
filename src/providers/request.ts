import axios from 'axios';

export interface RequestPayload {
  method?: 'GET' | 'POST';
  body?: any;
  params?: any;
}

export const request = async <T>(
  url: string, query?: RequestPayload
): Promise<T | undefined> => {
  try {
    const data = await axios(`http://127.0.0.1:3000/api${url}`, {
      method: query?.method || 'GET',
      params: query?.params,
      data: query?.body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }
    })

    return (data.data as T);
  } catch {
    return undefined;
  }
}