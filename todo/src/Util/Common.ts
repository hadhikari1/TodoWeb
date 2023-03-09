

export const URL = "http://localhost:8080/todo";

const serviceResponse = async(response: Response) => {
  return await response.json();
}

export const postService = async (URL: string, body: unknown) => {
  const response = await fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return await serviceResponse(response);
}

export const getService = async (URL: string) => {
  const response = await fetch(`${URL}`);
  return await serviceResponse(response);
}


