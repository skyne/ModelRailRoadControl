import * as request from 'superagent';
import ApiRequestQueue from './apiRequestQueue';

const apiRequestQueue = new ApiRequestQueue();

export default function callApi(url, query, data, method='GET'){

    const requestQueueItem = { url, query, method, body: data, isBackground: false, isSingleton: method == 'GET' };
    const itemOnRequestQueue = apiRequestQueue.addToQueue(requestQueueItem);

    if(itemOnRequestQueue !== requestQueueItem) {
        return itemOnRequestQueue.promise;
    }

    request[method.toLowerCase()](url)
        .query(query)
        .send(data);

    const op = new Promise((resolve, reject) => {
        request.end((err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res); // just need the body here
            }

            apiRequestQueue.removeFromQueue(requestQueueItem);
        });
    });

    op.abort = request.abort.bind(request);
    requestQueueItem.promise = op;
    return op;
}
