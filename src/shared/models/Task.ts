import {v4 as uuid} from 'uuid'
export class Task{
  #id: string
  #description: string
  #isSolved: boolean

  constructor(description: string){
    this.#id = uuid()
    this.#description = description
    this.#isSolved = false
  }

  public get id() : string {
    return this.#id
  }

  public get description() : string {
    return this.#description
  }

  public get isSolved(): boolean{
    return this.#isSolved
  }

  public set isSolved(value: boolean){
    this.#isSolved = value
  }
  
}