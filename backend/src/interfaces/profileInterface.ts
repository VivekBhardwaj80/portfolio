interface IProfile {
  name: string;
  headline: string;
  bio: string;
  location?: string;
  email?: string;
  phone?: string;
  website?: string;
  resumeUrl?: string;
  socialLinks?: {
    github?: string;
    linkedIn?: string;
    X?: string;
    instagram?: string;
    facebook?: string;
  };
  profileImage?:string
}

export default IProfile