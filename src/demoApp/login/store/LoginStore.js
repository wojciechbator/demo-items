import { extendObservable, computed } from 'mobx';

export class LoginStore {
    constructor() {
        extendObservable(this, {
            login: '',
            password: '',
            showError: false,

            getLogin: computed(() => this.login),
            getPassword: computed(() => this.password),
            isShowError: computed(() => this.showError) 
        });
    }
}