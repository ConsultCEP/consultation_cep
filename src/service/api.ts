import axios from 'axios';

export const apiAddress = axios.create({
  baseURL: 'http://localhost:3002/search-cep',
});

export const apiHistory = axios.create({
  baseURL: 'http://localhost:3002/history',
})