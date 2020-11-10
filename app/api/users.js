import client from './client'

const userendpoint = '/users'

const getusers = () => client.get(userendpoint)

const register = (userInfo) => client.post('/users', userInfo)

export default { register, getusers }
