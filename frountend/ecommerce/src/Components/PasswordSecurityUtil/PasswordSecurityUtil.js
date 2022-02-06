// Remove the password from the fetch users info => Security
const removePasswordFetch = function (data) {
    const userDataSc = data.userRefData.map((el) => {
        el.password = undefined;
        return el;
    });

    return userDataSc;
};

export default removePasswordFetch;
