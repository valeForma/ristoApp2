export class User {
 public _id: string;
 public name: string;
 public surname: string;
 public address: string;
 public phone: string;
 public password: string;
 public token: string;
 public email: string;

 constructor(_id: string, email: string , name: string , surname: string, address: string , phone: string  , password: string , token: string){
    this._id = _id;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.address = address;
    this.phone = phone;
    this.password = password
    this.token = token;
  }
}
