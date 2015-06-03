var Employee = require('../models/employee');

module.exports.create = function (req, res) {
  var employee = new Employee(req.body);
  employee.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Employee.find({}, function (err, results) {
    res.json(results);
  });
}