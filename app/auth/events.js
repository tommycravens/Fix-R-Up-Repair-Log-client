const getFormFields = require("../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");
const store = require("./../store");

const onSignUp = function (event) {
  event.preventDefault();
  console.log("Hello");
  //get info from event and form
  const form = event.target;
  console.log(form);

  const data = getFormFields(form);
  console.log(data);

  //make an api call using ajax
  api.signUp(data).then(ui.onSignUpSuccess).catch(ui.onFailure);

  //Handle successful api calls with .then
  //handle the failed api call with .catch
};

const onSignIn = function (event) {
  event.preventDefault();
  console.log("Hello");
  //get info from event and form
  const form = event.target;
  console.log(form);

  const data = getFormFields(form);
  console.log(data);

  //make an api call using ajax
  api.signIn(data).then(ui.onSignInSuccess).catch(ui.onFailure);

  //Handle successful api calls with .then
  //handle the failed api call with .catch
};

const onChangePassword = function (event) {
  event.preventDefault();
  const data = getFormFields(event.target);

  api.changePassword(data).then(ui.onChangePasswordSuccess).catch(ui.onFailure);
};

const onCreateEquipment = (event) => {
  event.preventDefault();
  const equipmentData = getFormFields(event.target);

  api.createEquipment(equipmentData).then(ui.onCreateEquipmentSuccess).catch(ui.onFailure);
};

const onUpdateEquipment = (event) => {
  event.preventDefault();
  const equipmentData = getFormFields(event.target);
  const id = equipmentData.equipment.id;
  api
    .updateEquipment(id, equipmentData)
    .then(api.readEquipment)
    .then(ui.onReadEquipmentSuccess)
    .catch(ui.onFailure)
    .then(ui.onUpdateEquipmentSuccess)
    .catch(ui.onFailure);
};

const onDeleteEquipment = (event) => {
  event.preventDefault();
  const data = getFormFields(event.target);
  api
    .deleteEquipment(data.equipment.id)
    .then(api.readEquipment)
    .then(ui.onReadEquipmentSuccess)
    .catch(ui.onFailure)
    .then(ui.onDeleteEquipmentSuccess)
    .catch(ui.onFailure);
};

const onReadEquipment = (event) => {
  event.preventDefault();
  api.readVocab().then(ui.onReadVocabSuccess).catch(ui.onFailure);
};

// const showForm = function (event) {
//   const btnId = $(event.target).attr('id')
//   if (btnId === 'create') {
//     // $('#create-vocab').show()
//     // $('#read-vocab').hide()
//     // $('#update-vocab').hide()
//     // $('#delete-vocab').hide()
//   }
//   if (btnId === 'read') {
//     // $("#create-vocab").hide()
//     // $("#read-vocab").show()
//     // $("#update-vocab").hide()
//     // $("#delete-vocab").hide()
//   }
//   if (btnId === 'update') {
//     // $("#create-vocab").hide()
//     // $("#read-vocab").hide()
//     // $("#update-vocab").show()
//     // $("#delete-vocab").hide()
//   }
//   if (btnId === 'delete') {
//   //   $("#create-vocab").hide()
//   //   $("#read-vocab").hide()
//   //   $("#update-vocab").hide()
//   //   $("#delete-vocab").show()
//   }
// }

const onSignOut = function () {
  api.signOut().then(ui.onSignOutSuccess).catch(ui.onFailure);
};

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onReadEquipment,
  onUpdateEquipment,
  onCreateEquipment,
  onDeleteEquipment
  // showForm
};
