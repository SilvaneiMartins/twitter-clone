/**
 * Gera um número aleatório de 8 dígitos
 * @returns Um número aleatório de 8 dígitos
 */
export const generateEmailToken = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
};
