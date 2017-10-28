import shallowEqual from 'shallowequal';

let Store = null;
export function setStore(store) {
    Store = store;
}

function isRequestEquals(request1, request2) {
    return request1.method === request2.method &&
        request1.url === request2.url &&
        shallowEqual(request1.query,request2.query) &&
        shallowEqual(request1.data, request2.data);
}

export default class ApiRequestQueue {
    constructor(afterAddCb, afterRemoveCb){
        this.Queue = new Map();
        this.index = 0;
        this.afterAdd = afterAddCb;
        this.afterRemoveCb = afterRemoveCb;
    }

    addToQueue(request){
        if(request.isSingleton) {
            for (const value of this.Queue.values()) {
                if(isRequestEquals(value,request)){
                    return request;
                }
            }
        }

        request.key = this.index++;
        this.Queue.set(request.key,request);

        if(this.afterAdd){
            afterAdd(this.Queue);
        }

        return request;
    }

    removeFromQueue(request){
        this.Queue.delete(request.key);

        if(this.afterRemove) {
            afterRemove(this.Queue);
        }
    }
}
