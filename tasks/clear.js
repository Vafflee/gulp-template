// Конфиг
import path from '../config/path.js';

// Плагины
import del from 'del';

// Удаление
export default () => {
    return del(path.root);
};