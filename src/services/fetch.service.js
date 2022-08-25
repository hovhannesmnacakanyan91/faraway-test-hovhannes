import axios from 'axios';

const fetch = ({ url, body = {}, method = 'GET' }) => {
  const config = {
    method,
    url,
    data: body,
  };

  config.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (method === 'GET') {
    config.params = body;
  }

  return axios(config);
};

export { fetch };
