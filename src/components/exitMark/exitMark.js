import { CustomElementLoader } from "/src/utils/customElementLoader";

export class ExitMark extends HTMLElement{
    constructor(){
        super();

        CustomElementLoader.loadComponent(this, 'exitMark')
    }
}