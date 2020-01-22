//assigned to an Object like extending an Object
const modelMixin = Object.assign({
    attrs: {},
    set(prop, value) {
        this.attrs[prop] = value;
    },

    get(prop) {
        console.log(this.attrs[prop]);
        return this.attrs[prop];
    }
});

const george = { name: "george" };
const model = Object.assign(george, modelMixin);
model.get("name"); //undefined

model.set("name", "Sam");
model.get("name"); //Sam
