"use strict"

const store = require("./../store")

const onSignUpSuccess = (response) => {
  $("#message").text(`Thank you for signing up ${response.user.email}`)
  $("#sign-up-form").trigger("reset")
  $("#sign-in-form").css("display", "block")
  $("#sign-in-header").css("display", "block")
  $("#sign-up-form").css("display", "none")
  $("#sign-up-header").css("display", "none")
}

const onSignInSuccess = (response) => {
  $("#message").text(`Sign-in was successful ${response.user.email}`)
  store.token = response.user.token
  $("#sign-in-form").trigger("reset")
  $("#sign-out").css("display", "block")
  $("#sign-out-header").css("display", "block")
  $("#sign-in-form").css("display", "none")
  $("#sign-in-header").css("display", "none")
  $("#sign-up-form").css("display", "none")
  $("#sign-up-header").css("display", "none")
  // $(".container").css("display", "block")
  $("#change-password").css("display", "block")
  $("#change-password-header").css("display", "block")
  // all of these may move to when the actually corresponding button is clicked instead of just on sign in.
  $("#create-equipment-form").css("display", "block")
  $("#read-equipment-form").css("display", "block")
  $("#update-equipment-form").css("display", "block")
  $("#delete-equipment-form").css("display", "block")
}

const onSignOutSuccess = () => {
  $("#message").text(`Sign-out was successful!`)
  $("#sign-out").trigger("reset")
  $("#sign-in-form").css("display", "block")
  $("#sign-in-header").css("display", "block")
  $("#sign-up-form").css("display", "block")
  $("#sign-up-header").css("display", "block")
  $("#sign-out").css("display", "none")
  $("#sign-out-header").css("display", "none")
  $("#change-password").css("display", "none")
  $("#change-password-header").css("display", "none")
  $(".container").css("display", "none")
  $("#create-equipment-form").css("display", "none")
  $("#read-equipment-form").css("display", "none")
  $("#update-equipment-form").css("display", "none")
  $("#delete-equipment-form").css("display", "none")
  $("#equipment_list").css("display", "none")
}

const onChangePasswordSuccess = () => {
  $("#message").text("Password change was successful")
  $("#change-password").trigger("reset")
}

const onCreateEquipmentSuccess = (response) => {
  $("#message").text(`Equipment  was created successfully`)
  $("#create-equipment-form").trigger("reset")
  const equipmentType = response.equipment
  const equipmentTypeHtml = `
  <li>
  equipmentType: ${equipmentType.equipmentType}
  modelName: ${equipmentType.modelName}
  modelYear: ${equipmentType.modelYear}
  modelNumber: ${equipmentType.modelNumber}
  serialNumber: ${equipmentType.serialNumber}
  </li>
`
  $("#equipment_list").html(equipmentTypeHtml)
}

const onReadEquipmentSuccess = (responseData) => {
  $("#message").text(`Successfully displaying your equipment`)
  $("#read-equipment-form").trigger("reset")
  const equipments = responseData.equipments

  let equipmentsHtml = ''

  equipments.forEach(equipment => {
    equipmentsHtml += `
  <li>
  equipmentType: ${equipment.equipmentType}
  modelName: ${equipment.modelName}
  modelYear: ${equipment.pronunciation}
  modelNumber: ${equipment.modelNumber}
  serialNumber: ${equipment.serialNumber}
  id: ${equipment._id}
  </li>
`
  })
  $("#equipment_list").html(equipmentsHtml)
};

const onUpdateEquipmentSuccess = () => {
  $("#message").text(`Successfully updated your equipment`)
  $("#update-equipment-form").trigger("reset")
};

const onDeleteEquipmentSuccess = () => {
  $("#message").text(`Successfully deleted your equipment`)
  $("#delete-equipment-form").trigger("reset")
};

const onFailure = (error) => {
  $("#message").text(`Oops something went wrong ${error.status}`)
  $("#sign-up-form").trigger("reset")
};

module.exports = {
  onSignUpSuccess,
  onFailure,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onCreateEquipmentSuccess,
  onReadEquipmentSuccess,
  onUpdateEquipmentSuccess,
  onDeleteEquipmentSuccess
}
