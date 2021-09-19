// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $("#sign-up-form").on("submit", authEvents.onSignUp);
  $("#sign-in-form").on("submit", authEvents.onSignIn);
  $("#sign-out").on("click", authEvents.onSignOut);
  $("#change-password").on("submit", authEvents.onChangePassword);
  $(".btn").on("click", authEvents.showForm);
  $("#create-equipment-form").on("submit", authEvents.onCreateEquipment);
  $("#read-equipment-form").on("submit", authEvents.onReadEquipment);
  $("#update-equipment-form").on("submit", authEvents.onUpdateEquipment);
  $("#delete-equipment-form").on("submit", authEvents.onDeleteEquipment);
})
