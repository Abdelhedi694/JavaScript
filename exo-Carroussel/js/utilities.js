"use strict"
/**
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns nombre aléatoire entre le min et le max
 */
function getRandomInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

