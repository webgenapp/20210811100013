export type A = {
  id?: number

  a: string
}

export type B = {
  id?: number

  b: string
}

export type C = {
  id?: number

  c: string
}

export type D = {
  id?: number

  d: string
}

export type User = {
  id?: number

  username: string

  passwordHash: string
}

export type AError = any

export type BError = any

export type CError = any

export type DError = any

export type UserError = any

export type LoginValues = {
  username: string
  password: string
}

export type RegisterValues = {
  username: string
  email: string
  password: string
  passwordConfirm: string
}
