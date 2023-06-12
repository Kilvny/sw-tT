

// I was using this to check on empty fields before shifting to /react-hook-form/
// now it's only used for validation that only specific data type is being sent like (size for DVD, dimensions for furniture etc.. )
const isEmpty = (data, selectedOption) => {
    for (let property in data["type"]) {
        if ((property !== selectedOption)) delete data["type"][property];
        if ((typeof (data["type"][property]) === 'string') && ((data["type"][property])?.trim() == "")) {
            delete data["type"][property];
            alert("all fields are required")
            return
        } else {
            for (let nestedProperty in data["type"][property]) {
                if (data['type'][property][nestedProperty]?.trim() == "") {
                    delete data["type"][property][nestedProperty]
                    alert("all fields are required")
                    return
                }
            }
        }

        // whitespace
    }

    try {

        for (let property in data) {
            if ((data[property]?.toString().trim() == "")) {
                alert("all fields are required")
                return
            }
        }

    } catch (error) {
        console.log(error)
    }
}
export { isEmpty }