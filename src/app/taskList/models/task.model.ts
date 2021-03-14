export class TaskModel {

  public id: number;
  public text: string;
  public completed: boolean;

  constructor(text:string) {
    this.text = text;
    this.id = Math.random();
  }

}
