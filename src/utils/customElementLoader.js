export class CustomElementLoader {

  constructor(){}
  
  static async loadComponent(element, componentName) {

    // Get Path for html and css files
    const basePath = "/src/components";
    const htmlPath = `${basePath}/${componentName}/${componentName}.html`;
    const cssPath = `${basePath}/${componentName}/${componentName}.css`;

    // Assign data to the element shadow root
    element.innerHTML = await (await fetch(htmlPath)).text();


    // Create link and assign href and rel type
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;

    // Assign the created link to the head
    document.head.appendChild(link);
  }
}
