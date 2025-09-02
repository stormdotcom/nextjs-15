// lib/db.ts (simulated in-memory database)
import bcrypt from 'bcryptjs';

const users = [
  {
    id: 1,
    email: 'test@example.com',
    password: '$2a$10$1x8k3v.zINsdC96vU4FXRzO.oNTIzMJXzkh5qUmRdmy4xgR/cz7r6', // Hash for 'password123'
  },
];

export const findUserByEmail = (email: string) => users.find(user => user.email === email);

export const addUser = (email: string, password: string) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: users.length + 1, email, password: hashedPassword };
  users.push(newUser);
  return newUser;
};
