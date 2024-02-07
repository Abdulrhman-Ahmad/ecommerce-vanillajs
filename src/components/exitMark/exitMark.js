import { CustomElementLoader } from "/src/utils/customElementLoader.js";

export class ExitMark extends HTMLElement{
    constructor(){
        super();

        CustomElementLoader.loadComponent(this, 'exitMark')
    }
}