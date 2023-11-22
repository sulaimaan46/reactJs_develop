
function Form() {
    return (
    <form>
    <label for="email"><b>{$inputName.email}</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
        <label for="email"><b>{$inputName.password}</b></label>
        <input type="text" placeholder="Enter Email" name="password" id="password" required></input>
    </form>

    );
}
export default function RegisterForm(){
    return (
        <section>
        <Form />
        </section>

    );
}

const $inputName = {
    email : 'Email',
    password : 'Password',
}
