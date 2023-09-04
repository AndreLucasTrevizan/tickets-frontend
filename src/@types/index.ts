export type RoleType = {
  id: number;
  name: String;
  created_at: Date;
  updated_at: Date;
}

export type UserType = {
  //code: String;
  //avatar: String;
  name: String;
  email: String;
  //role: RoleType;
  //created_at: Date;
  //updated_at: Date;
}

export type AuthContextType = {
  signed: boolean;
};
