const URL_BACK = import.meta.env.VITE_URL_BACK;
const PORT_BACK = import.meta.env.VITE_PORT_BACK;

export const apiCallBody = async (inputMethod: string, path: string, requestBody?: string): Promise<any> => {
  try {
    const data = await fetch(`${URL_BACK}:${PORT_BACK}` + path, {
      method: inputMethod,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })
    return data.json();
  } catch (error) {
    throw error;
  }
};
