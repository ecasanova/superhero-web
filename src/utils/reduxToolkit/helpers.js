import { createAction } from '@reduxjs/toolkit'

const prepare = (payload, meta, error) => {
  return {
    payload,
    meta,
    error
  }
}

export const createCustomAction = (type) => createAction(type, prepare)
