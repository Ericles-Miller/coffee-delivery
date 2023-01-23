import { v4 as uuidV4 } from 'uuid';



class User {
  id: string;
  name: string;
  email: string;
  passwprd: string;
  userName: string;
  avatar: string;
  isAdmin: boolean;
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = new uuidv4();
    }
  }
}

export { User }