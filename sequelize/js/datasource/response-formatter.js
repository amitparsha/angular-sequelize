"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseFormatConverter = /** @class */ (function () {
    function ResponseFormatConverter() {
    }
    ResponseFormatConverter.getInstance = function () {
        if (!this.instance) {
            this.instance = new ResponseFormatConverter();
        }
        return this.instance;
    };
    ResponseFormatConverter.prototype.convertToUsersFormat = function (queryResult) {
        var users = [];
        queryResult.forEach(function (dataValue) {
            users.push({
                id: dataValue.id,
                firstName: dataValue.firstName,
                middleName: dataValue.middleName,
                lastName: dataValue.lastName,
                email: dataValue.email,
                phoneNumber: dataValue.phoneNumber,
                roleId: dataValue.emp_role.dataValues.id,
                roleName: dataValue.emp_role.dataValues.role_name,
                address: dataValue.address,
                customerId: dataValue.customer.dataValues.id,
                customerName: dataValue.customer.dataValues.name
            });
        });
        return users;
    };
    return ResponseFormatConverter;
}());
exports.ResponseFormatConverter = ResponseFormatConverter;
//# sourceMappingURL=response-formatter.js.map