import { extendObservable, computed } from 'mobx';

export class ItemStore {
    constructor() {
        extendObservable(this, {
            items: [],
            
            getItems: computed(() => this.items)
        });
    }
}