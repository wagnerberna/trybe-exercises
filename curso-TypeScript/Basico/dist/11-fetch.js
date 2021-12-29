"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("fetch API:");
// fetch API / Arrow / async - await
const fetchApi01 = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const endpoint = url;
        const dataInfo = yield fetch(endpoint);
        const dataJson = yield dataInfo.json();
        console.log(dataJson);
        console.log(dataJson.results);
        const { results } = dataJson;
        return results;
    }
    catch (error) {
        console.log(`Erro API01: ${error}`);
    }
});
// fetch API / FN Normal  / async - await
function fetchApi02(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const endpoint = url;
            const dataInfo = yield fetch(endpoint);
            const dataJson = yield dataInfo.json();
            console.log(dataJson);
            console.log(dataJson.results);
            const { results } = dataJson;
            return results;
        }
        catch (error) {
            console.log(`Erro API02: ${error}`);
            return error;
        }
    });
}
// fetch API / Arrow / .then
const fetchApi03 = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => data.results)
        .catch((error) => console.log(`Erro API03: ${error}`));
};
// // fetch API / Fn Normal / .then
function fetchApi04(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch(url)
            .then((res) => res.json())
            .then((data) => data.results)
            .catch((error) => console.log(`Erro API04: ${error}`));
    });
}
// FN para chamar API
const rickAndMorty = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultApi = yield fetchApi04(url);
        console.log(resultApi);
        console.log(resultApi[0]);
        console.log(resultApi[0].name);
        return resultApi;
    }
    catch (error) {
        console.log(console.log(`Erro Function rickAndMorty: ${error}`));
        return error;
    }
});
rickAndMorty("https://rickandmortyapi.com/api/character");
