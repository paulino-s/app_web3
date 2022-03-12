const Migrations = artifacts.require("Migrations");
const ListTodo = artifacts.require("ListTodo");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ListTodo);
};
