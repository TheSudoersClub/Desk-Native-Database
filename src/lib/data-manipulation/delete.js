import {
    loadJSONFile,
    saveJSONFile
} from "../helpers/helpers.js";

// Delete fields from a data object in a JSON file
export function deleteData(DB_DIR, filename, id, fields) {
    const data = loadJSONFile(DB_DIR, filename);
    const index = data.findIndex(d => d.id === id);
    if (index === -1) {
        return false;
    }
    const oldData = data[index];
    const updatedData = {
        ...oldData
    };
    fields.forEach(field => {
        delete updatedData[field];
    });
    updatedData.id = id;
    data[index] = updatedData;
    saveJSONFile(DB_DIR, filename, data);
    return true;
}