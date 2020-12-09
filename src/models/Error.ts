import { InvalidFieldsError } from "./InvalidFields"



export class NetworkError extends Error {
  constructor(message?: string) { super(message) }
}
