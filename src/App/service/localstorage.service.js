const TODOS = "todosList";
const USER_ID = "userId";

const getTodos = () => JSON.parse(localStorage.getItem(TODOS));
const setTodos = (newArr) =>
    localStorage.setItem(TODOS, JSON.stringify(newArr));

const getUserId = () => localStorage.getItem(USER_ID);
const setUserId = (id) => localStorage.setItem(USER_ID, id);
const clearUserId = () => localStorage.removeItem(USER_ID);

const localStorageService = {
    getTodos,
    setTodos,
    getUserId,
    setUserId,
    clearUserId,
};
export default localStorageService;
