export default function createEmployeesObject(departmentName, employees) {
    let obj = {};
    obj[departmentName] = employees;
    return obj;
}
