const GREETING = 'Hello World!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
