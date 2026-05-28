exports.loginPage = (req, res) => {
    res.render('login');
};

exports.login = (req, res) => {

    const { email, senha } = req.body;

    // LOGIN FIXO
    if (
        email === 'admin@gmail.com' &&
        senha === '123'
    ) {

        req.session.user = {
            email
        };

        return res.redirect('/');
    }

    res.send('Email ou senha inválidos');
};

exports.logout = (req, res) => {

    req.session.destroy(() => {
        res.redirect('/login');
    });

};