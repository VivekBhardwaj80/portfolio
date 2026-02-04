interface IContact {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
  phone?: string;
  isRead?: boolean;
}
export default IContact;
