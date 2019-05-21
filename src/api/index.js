import ajax from './ajax.js'


export const MockHome = () => ajax('/mock/home');
export const InitSearch =()=> ajax('/mock/search');
export const SearchResult =()=>ajax('/mock/search');

export const MockCategory =()=> ajax('/mock/category')
