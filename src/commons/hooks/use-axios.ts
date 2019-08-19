/*
 * based on: https://github.com/simoneb/axios-hooks
 * The MIT License (MIT)
 * Copyright (c) 2015-present Dan Abramov
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react'
import DefaultAxios from 'axios'
import LRU from 'lru-cache'

const actions = {
  REQUEST_START: 'REQUEST_START',
  REQUEST_END: 'REQUEST_END'
};

const ssrPromises: any[] = [];

let cache: any;
let axiosInstance: any;

export function resetConfigure() {
  cache = new LRU();
  axiosInstance = DefaultAxios
}

resetConfigure();

export function configure(options: any) {
  if (options.axios) {
    axiosInstance = options.axios
  }

  if (options.cache) {
    cache = options.cache
  }
}

export function loadCache(data: any) {
  cache.load(data)
}

export async function serializeCache() {
  await Promise.all(ssrPromises);

  ssrPromises.length = 0;

  return cache.dump()
}

async function cacheAdapter(config: any) {
  const cacheKey = JSON.stringify(config);
  const hit = cache.get(cacheKey);

  if (hit) {
    return hit
  }

  delete config.adapter;

  const response = await axiosInstance(config);

  const responseForCache = {...response};
  delete responseForCache.config;
  delete responseForCache.request;

  cache.set(cacheKey, responseForCache);

  return response
}

function createInitialState(options: any) {
  return {
    loading: !options.manual
  }
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case actions.REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.REQUEST_END:
      return {
        ...state,
        loading: false,
        ...(action.error ? {} : {data: action.payload.data}),
        [action.error ? 'error' : 'response']: action.payload
      };
    default:
      return state
  }
}

async function request(config: any, dispatch: any) {
  try {
    dispatch({type: actions.REQUEST_START});
    const response = await axiosInstance(config);
    dispatch({type: actions.REQUEST_END, payload: response})
  } catch (err) {
    dispatch({type: actions.REQUEST_END, payload: err, error: true})
  }
}

function executeRequestWithCache(config: any, dispatch: any): any {
  request({...config, adapter: cacheAdapter}, dispatch)
}

function executeRequestWithoutCache(config: any, dispatch: any) {
  return request(config, dispatch)
}

export default function useAxios(config: any, options = {manual: false}) {
  if (typeof config === 'string') {
    config = {
      url: config
    }
  }

  const [state, dispatch] = React.useReducer(
    reducer,
    createInitialState(options)
  );

  if (typeof window === 'undefined') {
    ssrPromises.push(axiosInstance({...config, adapter: cacheAdapter}))
  }

  React.useEffect(() => {
    if (!options.manual) {
      executeRequestWithCache(config, dispatch)
    }
  }, [JSON.stringify(config)]);

  return [
    state,
    (configOverride: any, options = {useCache: false}) => {
      if (options.useCache) {
        return executeRequestWithCache(
          {...config, ...configOverride},
          dispatch
        )
      }

      return executeRequestWithoutCache(
        {...config, ...configOverride},
        dispatch
      )
    }
  ]
}
