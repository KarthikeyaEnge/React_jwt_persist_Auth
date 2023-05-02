# React_jwt_persist_Auth

A small application to describe the persistence of the user authentication using React, Jwt, Express

## Tech stack

![](https://skillicons.dev/icons?i=react,vite,express,nodejs,mongo,tailwind)

# Visuals

|                                             Login                                              |                                             Logout                                             |                                              Info                                              |
| :--------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
| ![](https://raw.githubusercontent.com/KarthikeyaEnge/React_jwt_persist_Auth/main/assets/1.png) | ![](https://raw.githubusercontent.com/KarthikeyaEnge/React_jwt_persist_Auth/main/assets/2.png) | ![](https://raw.githubusercontent.com/KarthikeyaEnge/React_jwt_persist_Auth/main/assets/3.png) |

## ❗Disclamer:

Above code works in a secured web domains (i.e https sites), cause the cookies can't be set in an insecure web sites which can lead to many security issues. If you deploy this site in any hosting platform , change setcookie code in backend_jwt/controllers/loginuser as:

```
res.cookie('refresh',refreshtoken,{
     httpOnly: true,
     secure:true,
     sameSite:'none',
     maxAge: 1000 * 60 * 60 * 24,
})
```

above code will set the cookie in the secure sites.

`Note: Above code need not to be set if you need to test it with postman, thunderclient, because they will set the cookie and you can see the accesstoken and refreshtoken in the response and cookie`
