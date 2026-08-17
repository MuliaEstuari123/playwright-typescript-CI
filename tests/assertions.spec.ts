import { expect, test } from '@playwright/test';

let Url = 'https://katalon-demo-cura.herokuapp.com/';


test ('extrating value', async ( { page } ) => {

await page.goto(Url);

const btnMakeAppointment = page.locator('#btn-make-appointment');
await expect(btnMakeAppointment).toBeVisible();
await btnMakeAppointment.click();

'validation text'
const parentLogin = page.locator("//form[@class='form-horizontal']").filter({ hasText: 'Login'});
const buttontext = await parentLogin.locator('button').textContent();
expect(buttontext).toEqual('Login');

'input username'
let username = 'John Doe';
const inputUsername = await page.getByLabel('Username')
await expect(inputUsername).toBeVisible();
await inputUsername.fill(username);
const usernameValue = await inputUsername.inputValue();
expect(usernameValue).toEqual(username);

'click login'
const LoginButton = page.locator("//form[@class='form-horizontal']").getByRole('button', { name: 'Login' });
await expect(LoginButton).toBeVisible();
await LoginButton.click();

 
});

test ('assertions', async ( { page } ) => {

await page.goto(Url);

const btnMakeAppointment = page.locator('#btn-make-appointment');
await expect(btnMakeAppointment).toBeVisible();
await btnMakeAppointment.click();

const LoginButton = page.locator("//form[@class='form-horizontal']").filter( { hasText: 'Login' }).locator('button');

//general assertion
const value = 5;
expect(value).toEqual(5);
console.log(value);

const text = await LoginButton.textContent();
expect(text).toEqual('Login');

await expect(LoginButton).toBeVisible();


//locator assertion
await expect(LoginButton).toHaveText('Login');

//soft assertion
await expect.soft(LoginButton).toHaveText('Login');
await LoginButton.click();


});










