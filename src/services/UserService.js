export const UserService = {
    async login(email) {
        const url = "http://localhost:8080/login";
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                email: email
            }),
        };
        return await fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                return data;
            });

    },
    async getToken(code) {
        const url = `http://localhost:8080/user/login`;
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                code: code
            }),
        };
        return await fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem({ toke: data.access_token })
                return data;
            });
    },
    async getProfile() {
        const url = `http://localhost:8080/user/login`;
        const options = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        };


        return await fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem({ toke: data.access_token })
                return data;
            });
    }


}
export default UserService;
