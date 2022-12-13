
const sendMessage = (type = null, payload = null) => {
  chrome.runtime.sendMessage(
    {
      type,
      payload,
    },
    (response) => {
       console.log(response);
    }
  );
};

module.exports = {
  sendMessage,
};
