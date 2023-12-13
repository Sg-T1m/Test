import axios from "axios";
import { RegistrationDataUser } from "@/interface/RegistrationDataUserInterface";
export const RegistrationModule = {
  state: (): store => ({
    UserId: 0,
    Name: "",
    SName: "",
    MidellName: "",
    Data: new Date(),
    id: 0,
    Login: "",
    Password: "",
    PersonalDataId: 0,
  }),
  getters: {},
  mutations: {
    SetUserId(state: any, id: number) {
      state.UserId = id;
    },
    SetName(state: any, Name: string) {
      state.Name = Name;
    },
    SetSName(state: any, SName: string) {
      state.SName = SName;
    },
    SetMidellName(state: any, MidellName: string) {
      state.MidellName = MidellName;
    },
    SetData(state: any, date: Date) {
      state.date = date;
    },
    Setid(state: any, id: Number) {
      state.id = id;
    },
    SetLogin(state: any, Login: string) {
      state.Login = Login;
    },
    SetPassword(state: any, Password: string) {
      state.Password = Password;
    },
    SetPersonalDataId(state: any, PersonalDataId: Number) {
      state.PersonalDataId = PersonalDataId;
    },
  },
  actions: {
    async fetchRegistration(
      { state, commit }: any,
      dataUser: RegistrationDataUser
    ) {
      console.log(dataUser);
      try {
        const response = await axios.post("https://localhost:7217/SaveUser", [
          dataUser,
        ]);
        commit("SetUserId", dataUser.UserId);
        commit("SetName", dataUser.Name);
        commit("SetSName", dataUser.Sname);
        commit("SetMidellName", dataUser.MidellName);

        commit("Setid", dataUser.Id);
        commit("SetLogin", dataUser.Login);
        commit("SetPassword", dataUser.Password);
        commit("SetPersonalDataId", dataUser.PersonalDataId);
        console.log("запрос улетел");
      } catch (e) {
        console.log(e);
        console.log("Хуй пойми ч за ошиька");
      } finally {
      }
    },
  },
};
interface store {
  UserId: Number;
  Name: String;
  SName: String;
  MidellName: String;
  Data: Date;
  id: Number;
  Login: String;
  Password: String;
  PersonalDataId: Number;
}
