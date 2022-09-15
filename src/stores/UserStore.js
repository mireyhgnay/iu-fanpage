import { observable, action } from 'mobx';

/* SignIn 에서는 사용자 계정명을 저장, Main 에서는 사용자 계정명 표시 */
export class UserStore{
  @observable usermail = ""

  @action setUsermail = (usermail) => {
    this.usermail = usermail
  }
}