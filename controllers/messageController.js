const messages = require('../messages');

const messageController = (req, res) => {
  const { messageUser, messageText } = req.body;
  if (messageUser && messageText) {
    const newUser = {
      user: messageUser,
      text: messageText,
      added: new Date(),
    };
    messages.push(newUser);
    res.redirect('/');
  } else {
    res.status(400).send('Text and user are required');
  }
};

module.exports = messageController;
