// import { ITeams } from '../../database/interfaces/ITeams'

export const allTeams= [
    {
      id: 1,
      teamName: 'Felfeu do juleu'
    }, {
      id: 2,
      teamName: 'Fala Fala Jubileu'
    }
]

export const oneTeam = {
    id: 1,
    teamName: 'Felfeu do juleu'
  }

export const oneUser = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'

}

export const sucessLogin = {
  email: 'admin@admin.com',
  password: 'secret_admin'
}

export const tokenMockOk = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NjY5NzIwNDV9.fKIS__aBvIxkhYIVJ0BQinCwOj01lcvB2ZfjJ33WZQQ'

export const failLoginIsRequired = {
  email: 'admin@admin.com'
}

export const failLoginEmailIsNotEmail = {
  email: 'admin@admin',
  password: 'secret_admin'
}

export const failLoginPasswordTooShort ={
  email: 'admin@admin.com',
  password: '12345'
}

export const failLoginEmailWrong = {
  email: 'admin@admin1.com',
  password: 'secret_admin'
}

export const failLoginPasswordWrong = {
  email: 'admin@admin.com',
  password: 'secret_admin1'
}

export const failLoginMessage400 = {
  message: 'All fields must be filled'
}

export const failLoginMessage401 = {
  message: 'Incorrect email or password'
}
