import {AsyncStorage} from "react-native";

export const setStorage = function (key, value) {
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(key, value, () => {
            resolve({key: key, value: value})
        });
    })
};

export const getStorage = function (key) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key, (err, result) => {
            if (result)
                resolve(result);
            else
                resolve(null);
        });
    })
};
