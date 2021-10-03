'usestrict';
function Widget(partNo, size) {
    this.partNo = partNo;
    this.size = size;
}

function FormFactor(material, widget) {
    this.material = material;
    this.widget = widget;
}

let widgetA = new Widget(100, 'large');
let widgetB = new Widget(101, 'small');
let formFactorA = new FormFactor('plastic', widgetA);
let formFactorB = new FormFactor('metal', widgetB);
