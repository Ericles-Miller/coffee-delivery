import { v4 as uuidV4 } from 'uuid';

class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  userName: string;
  // avatar: string;
  // isAdmin: boolean;
  // create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
