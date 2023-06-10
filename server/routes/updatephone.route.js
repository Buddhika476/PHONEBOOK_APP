const express = require('express');
const PhoneBook = require('../mongodb/Model/phoneBook');

const router = express.Router();

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { phoneNumber } = req.body;

    const updatedPhoneNumber = await PhoneBook.findByIdAndUpdate(
      id,
      { phoneNumber },
      { new: true }
    );

    if (!updatedPhoneNumber) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Phone number not found',
      });
    }

    res.status(200).json({
      status: 'Success',
      data: {
        phoneNumber: updatedPhoneNumber,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err.message,
    });
  }
});

module.exports = router;
