import User from '../models/user.model.js'

export const register = async (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body

    const newUser = new User({ username, email, password })
    console.log('NEW USER', newUser)

    try {
        await newUser.save()
    } catch(error) { console.log(error)}

}
export const login = (req, res) => { res.send('Login')}