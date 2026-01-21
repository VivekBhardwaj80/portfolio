interface IProfile {
  name: string;
  headline: string;
  bio: string;
  location?: string;
  email?: string;
  phone?: number;
  website?: string;
  resumeUrl?: string;
  socialLinks?: {
    github?: string;
    linkedIn?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  profileImage?:string
}

export default IProfile