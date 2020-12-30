const sequelize = require("../configs/database");
const { DataTypes } = require("sequelize");
const RequestStatus = require("./RequestStatus");
const User = require("./User");
const Ambulance = require("./Ambulance");

const Request = sequelize.define(
    "request",
    {
        pickUp: {
            type: DataTypes.JSON,
            field: "pickup",
            allowNull: false
        },
        destination: {
            type: DataTypes.JSON
        },
        patientName: {
            type: DataTypes.STRING,
            field: "patient_name"
        },
        patientPhone: {
            type: DataTypes.STRING,
            field: "patient_phone"
        },
        createdDate: {
            type: DataTypes.DATEONLY,
            defaultValue: new Date(),
            field: "created_date"
        },
        morbidity: {
            type: DataTypes.STRING
        },
        morbidityNote: {
            type: DataTypes.STRING,
            field: "morbidity_note"
        },
        isOther: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            field: "is_other"
        },
        isEmergency: {
            type: DataTypes.BOOLEAN,
            field: "is_emergency",
            defaultValue: true
        },
        region: {
            type: DataTypes.STRING
        },
        feedbackDriver: {
            type: DataTypes.STRING,
            field: "feedback_driver"
        },
        feedbackService: {
            type: DataTypes.STRING,
            field: "feedback_service"
        },
        ratingService: {
            type: DataTypes.INTEGER,
            field: "rating_service"
        },
        ratingDriver: {
            type: DataTypes.INTEGER,
            field: "rating_driver"
        }
    },
    { freezeTableName: true, initialAutoIncrement: 100, timestamps: false }
);

module.exports = Request;
