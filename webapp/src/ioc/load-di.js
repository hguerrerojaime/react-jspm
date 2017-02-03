import injectables from './injectables';
import Injector from './Injector';

export default function loadDI() {

    for (let injectable of injectables) {
       Injector.inject(injectable);
    }

}
