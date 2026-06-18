/**
 * Renderiza a página de login.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {void}
 */

exports.loginPage = (req, res) => {
    res.render('login');
};

/**
 * Realiza a autenticação do usuário.
 *
 * @param {import('express').Request} req Dados enviados pelo formulário de login.
 * @param {import('express').Response} res Resposta HTTP.
 * @returns {void}
 */

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

/**
 * Encerra a sessão do usuário autenticado.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {void}
 */

exports.logout = (req, res) => {

    req.session.destroy(() => {
        res.redirect('/login');
    });

};