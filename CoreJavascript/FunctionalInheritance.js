//creating a function and returning an object inside that
const rawMixin = function() {
    const attrs = {};

    return Object.assign(this, {
        set(name, value) {
            attrs[name] = value;
        },

        get(name) {
            console.log(attrs[name]);
            return attrs[name];
        }
    });
};

const mixinModel = target => rawMixin.call(target);

const georgeObj = { name: "george" };
const model = mixinModel(georgeObj);

model.get("name"); //undefined

model.set("name", "Sam");
model.get("name"); //Sam
