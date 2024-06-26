// facultyRoutes.js

const express = require("express");
const router = express.Router();

// Import faculty controller
const facultyController = require("../controllers/facultyController");
const qrController = require("../controllers/qrController");

// Define routes
router.post("/register", facultyController.register);
router.post("/login", facultyController.login);
router.post("/generateNewQr", qrController.generateNewQr);
router.post("/insertFaculty", facultyController.insertFaculty);
router.get("/getAllFaculty", facultyController.getAllFaculty);
router.get("/getAllFacultyById", facultyController.getFacultyById);
router.put("/updateById", facultyController.updateById);
router.delete(
  "/deleteFacultyById/:emplyoeeId",
  facultyController.deleteFacultyById
);
router.post("/scanFaculty", qrController.scanFaculty);
router.post("/entryFaculty", facultyController.entryFaculty);
router.post("/exitFaculty", facultyController.exitFaculty);

module.exports = router;
