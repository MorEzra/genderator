var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let personsDao = require("../dao/persons-dao");
function getAllNames() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield personsDao.getAllNamesFromDB();
    });
}
function setNewNameRecord(record) {
    return __awaiter(this, void 0, void 0, function* () {
        yield personsDao.setNewNameRecordToDB(record);
    });
}
function getUserByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield personsDao.getUserByNameFromDB(name);
    });
}
module.exports = { getAllNames, setNewNameRecord, getUserByName };
//# sourceMappingURL=persons-logic.js.map