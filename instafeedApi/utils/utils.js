const objResponse = {
    data: {},
    message: '',
  };
  
const commonResponse = (res, statusCode, data, message) => {
  let copyResponse = { ...objResponse };
  const defaultMessage = 'There are no records to be shown';
  if (data.length > 0) {
    copyResponse.data = data || [];
    copyResponse.message = message || defaultMessage;
  }

  res.status(statusCode).json(copyResponse);
};

module.exports = {
  commonResponse,
};
