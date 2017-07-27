import { extendObservable, computed } from 'mobx';

export class SessionStore {
    constructor() {
        extendObservable(this, {
            expiration: '',
            authenticated: false,

            getExpiration: computed(() => this.expiration),
            isAuthenticated: computed(() => this.authenticated)
        });
    }
}