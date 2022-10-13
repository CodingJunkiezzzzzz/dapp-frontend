import axios from 'axios';

type JsonRpcRequestBody = {
  method: string;
  params: Array<any>;
};

export default function rpcCall(url: string, body: JsonRpcRequestBody) {
  return new Promise<any>((resolve, reject) => {
    axios
      .post(url, { ...body, jsonrpc: '2.0', id: 0 })
      .then(({ data }) => {
        if (data.result) resolve(data.result);
        else reject(data.error);
      })
      .catch(reject);
  });
}
