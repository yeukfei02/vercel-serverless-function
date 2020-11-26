import localStorage from 'node-localstorage';
const LocalStorage = localStorage.LocalStorage;
const db = new LocalStorage('./db');

export const getDB = (): localStorage.LocalStorage => {
  return db;
};
