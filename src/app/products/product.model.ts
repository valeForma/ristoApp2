export class Product {

  public name: string;
  public description: string;
  public imagePath: string;
  public price: number;
  public _id: string;
   constructor(name: string , description: string ,  imagepath: string, price: number , _id: string){
      this._id = _id;
      this.price = price;
      this.imagePath = imagepath;
      this.name =  name;
      this.description = description;
   }


}
