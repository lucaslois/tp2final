import { ValidationError } from "sequelize";

export const errorHandler = (err, req, res, next) => {
  if (err.name === "SequelizeValidationError") {
    res.status(err?.response?.status || 422).json({
      success: false,
      message: err.message,
      errors: err.errors.map((errorItem) => ({
        field: errorItem.path,
        rule: errorItem.validatorKey,
        detail: errorItem.validatorArgs.join(","),
      })),
    });
  } else {
    res.status(err?.response?.status || 500).json({
      success: false,
      message: err.message,
    });
  }
};
