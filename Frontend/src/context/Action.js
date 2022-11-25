export const LoginStart = (userCredentials) =>({
    type:"LOGIN_START"
})

export const LoginSucessfull = (user)=>({
    type: "LOGIN_SUCESS",
    payload : user,
})

export const LoginFailure = () =>({
    type : "LOGIN_FAILURE"
})