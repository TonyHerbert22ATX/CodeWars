function wrap(value) {
    return (wrapper_obj = {
        'value': value,
    });
}

wrapper_obj = wrap("my_wrapped_string");
console.log(wrapper_obj);

console.log(wrapper_obj["value"] === "my_wrapped_string");
