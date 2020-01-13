const Visitor = require('../models/Visitor');

exports.getVisitors = async (req, res, next) => {
  try {
    const visitorExists = await Visitor.findOne({ name: req.query.name });
    if (visitorExists && visitorExists.name !== 'Anónimo') {
      await Visitor.findById(visitorExists.id, (err, visitor) => {
        visitor.count += 1;
        visitor.save();
      });
    } else {
      await Visitor.create({ name: req.query.name || 'Anónimo' });
    }
    const visitors = await Visitor.find();
    return res.render('index', {
      pageTitle: 'Recurring Visitors',
      visitors,
    });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
